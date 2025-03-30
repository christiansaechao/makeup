import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useImageStorePersisted, useUserStorePersisted } from '../../store/userStore';
import { useMakeupStore } from '../../store/makeupStore';
import { 
	skinTones, 
	eyeColors, 
	lipColors, 
	colorMatch, 
	getMakeupRecommendations
} from './colorHelper';

import PlaceHolder from '../../images/placeholder.jpg';
import './styles.css';
const apiKey = process.env.REACT_APP_API_KEY;

const PhotoUpload = ({ setPageStep, pageStep }) => {
    const { imageData, setImageData } = useImageStorePersisted();
	const { setUser, skinTone, eyeColor, lipColor } = useUserStorePersisted();
	const { lipSticks, eyeShadows, blushes } = useMakeupStore();

    const [uploadedImage, setUploadedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

    const setDefaultImage = (e) => {
        setUploadedImage(e.target.files[0]);
    }

    const handleImageUpload = async () => {
        if (!uploadedImage) {
            setErrorMessage("NO IMAGE UPLOADED");
            return;
        }

        // creating a temporary image URL from uploaded image, 
        const userImage = new Image();
        userImage.src = URL.createObjectURL(uploadedImage);

        userImage.onload = async () => {
            // creating a temporary canvas, that will not be displayed in the DOM
            const canvas = document.createElement("canvas");
			canvas.width = userImage.width;
            canvas.height = userImage.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(userImage, 0, 0 );

            const coordinates = await handleImageAnalysis();
			if (!coordinates) {
				setErrorMessage("Error with Cloudmersive API: could not get coordinates from image.");
			}
			
            const userColors = extractColors(ctx, coordinates);
			setImageData(userColors);
			setUser({img: userImage.src});
			convertUserColors();
			setPageStep(pageStep + 1);
        };
    };

	/*
	* Gets data from cloudmersive api
	* returns [][string, object] for eyes, lips, and face
	*/
    const handleImageAnalysis = async () => {
        if (!uploadedImage) {
            setErrorMessage("NO IMAGE UPLOADED");
            return;
        }

        try {
			setLoading(!loading);
            const formData = new FormData();
            formData.append('image', uploadedImage);
            const { data } =  await axios.post("https://api.cloudmersive.com/image/face/locate-with-landmarks", formData, { headers: {"Apikey": apiKey }});

			if (!data || !data.Faces || data.Faces.length === 0) {
				setErrorMessage("No faces detected. Please try another image.");
				return null;
			}

			setLoading(!loading);
            return [['eye', data.Faces[0].RightEye], ['lips', data.Faces[0].LipsOuterOutline], ['skin', data.Faces[0].BottomAndSidesOfFace]];
        } catch(err) {
			console.error("Error reaching Cloudmersive API:", err);
			setErrorMessage("An error occurred while processing the image. Please try again later.");
			return null;
        }
    }

	/*
	* Extracts the color from face in specific areas
	* returns an [eyes{}, lips{}, face{}]
	*/
    const extractColors = (ctx, coordinates) => {
		const extractedColors = coordinates.map((area) => {
			const startingPoint = area[1][0]; // { X, Y }
			let xLength = 0;
			let yLength = 0;
			
			area[1].forEach(({ X, Y }) => {
				if ( X > xLength ) xLength = X;
				if ( Y > yLength ) yLength = Y;
			});
			
			// find the furthest points from our startingPoint, for our distance our rectangle should be drawn when using getImageData
			const xDist = Math.abs(xLength - area[1][0].X);
			const yDist = Math.abs(yLength - area[1][0].Y);
			const pixelData = ctx.getImageData(startingPoint.X, startingPoint.Y, xDist, yDist).data;

			if (!pixelData) {
				setErrorMessage('There was an error when trying to get the pixel data from the image');
				return null;
			}

			const commonColors = findMostCommonColors(pixelData);
			
			return {[area[0]]: commonColors};
		});

		return extractedColors;
	};

	/*
	* Returns [][] of the 5 most common colors in RGBA format and their frequency count
	*/
	const findMostCommonColors = (colors) => {
		const colorMap = {};

		for (let i = 0; i < colors.length; i += 4) {
			const r = colors[i]; 
			const g = colors[i + 1];
			const b = colors[i + 2];
			const a = colors[i + 3];
			const rgba = `${r},${g},${b},${a}`; 

			colorMap[rgba] = (colorMap[rgba] || 0) + 1
		}

		const sortedColors = Object.entries(colorMap).sort((a, b) => b[1] - a[1]);
		return sortedColors.slice(0, 5);
	}

	const convertUserColors = () => {
		const eyesData = imageData[0].eye;
		const lipsData = imageData[1].lips; 
		const skinData = imageData[2].skin;

		const skinTone = colorMatch(skinData, skinTones);
		const eyeColor = colorMatch(eyesData, eyeColors);
		const lipColor = colorMatch(lipsData, lipColors);

		setUser({ 
			skinTone: skinTone,
			eyeColor: eyeColor,
			lipColor: lipColor
		});

		const results = getMakeupRecommendations([skinTone, eyeColor, lipColor], [blushes, eyeShadows, lipSticks]);
		setUser({ 
			blushes: results.blush,
			eyeShadows: results.eyeshadow,
			lipSticks: results.lipstick
		});

		alert("working");
	}

	return (
		<div className="photo-upload-container flex justify-center align-center flex-col gap-2 p-5" >
			<h1 className="text-center text-3xl mb-2">Photo Upload</h1>
			<div className="img-container mb-5" >
				<img src={uploadedImage ? URL.createObjectURL(uploadedImage) : PlaceHolder} className="m-auto" alt="Uploaded Preview" />
			</div>
			<input type="file" accept=".jpg, .jpeg, .png" className="upload m-auto w-full" onChange={setDefaultImage} placeholder='Upload Image' />
			<p className="text-center text-base text-red-700">{errorMessage}</p>
			<div className="btn border-2 border-black rounded-md p-3" onClick={!loading ? handleImageUpload : null}>{loading ? 'Loading...' : 'Get Started!'}</div>
		</div>
	)
}

export default PhotoUpload;