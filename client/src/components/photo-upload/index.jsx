import React from 'react';
import './styles.css';

const PhotoUpload = () => {
    return (
        <div className="photo-upload-container flex justify-center align-center flex-col">
            <h1 className="text-center text-3xl">Photo Upload</h1>
            <div>image goes here</div>
            <input type="file" placeholder='Upload Image' />
            <p>Complexion Analysis</p>
            <p>Your complexion type is: Medium</p>
            <div className="btn border-2 border-black rounded-md">See Your Recommendations</div>
        </div>
    )
}

export default PhotoUpload;