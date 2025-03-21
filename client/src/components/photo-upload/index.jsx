import React, { useState } from 'react';
import axios from 'axios';

import PlaceHolder from '../../images/placeholder.jpg';
import './styles.css';

const PhotoUpload = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const apiKey = process.env.REACT_APP_API_KEY;

    const handleImageUpload = (e) => {
        setUploadedImage(e.target.files[0]);
    }

    const handleImageAnalysis = async () => {
        if (uploadedImage === null) {
            setErrorMessage("NO IMAGE UPLOADED");
            return true;
        }

        try {
            const formData = new FormData();
            formData.append('image', uploadedImage);
            const { data } =  await axios.post("https://api.cloudmersive.com/image/face/locate-with-landmarks", formData, { headers: {"Apikey": apiKey }});
            console.log(data);
        } catch(err) {
            throw new Error(err);
        }
    }
    
    return (
        <div className="photo-upload-container flex justify-center align-center flex-col gap-2 p-5" >
            <div className="img-container mb-5" >
                <h1 className="text-center text-3xl mb-2">Photo Upload</h1>
                <img src={uploadedImage ? URL.createObjectURL(uploadedImage) : PlaceHolder} className="m-auto" alt="Uploaded Preview" />
            </div>
            <input type="file" accept=".jpg, .jpeg, .png" className="upload m-auto w-full" onChange={handleImageUpload} placeholder='Upload Image' />
            <p className="text-center text-base text-red-700">{errorMessage}</p>
            <div className="btn border-2 border-black rounded-md p-3" onClick={handleImageAnalysis}>Get Started!</div>
        </div>
    )
}

export default PhotoUpload;