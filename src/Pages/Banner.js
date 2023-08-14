import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./Banner.css";


const Banner = () => {
    const [randomImage, setRandomImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRandomImage() {
            try {
                const randomImageId = Math.floor(Math.random() * 1000);
                const response = await axios.get(`https://picsum.photos/1920/1080?random=${randomImageId}`);
                setRandomImage(response.request.responseURL);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        }

        fetchRandomImage();
    }, []);

    function handleClick() {
        navigate('/char');
    }

    return (
        <div className="banner">
            <img src={randomImage} alt="Banner" />
            <div className="banner-content">
                <h1>STAR_WAR_APP</h1>
                <br/>
                <div>
                    <span> <button onClick={handleClick}>Characters</button></span>
                </div>
            </div>
        </div>
    );
}

export default Banner;
