import React from 'react';
import MemeData from './MemeData';
import { useState } from 'react';

function Hero() {

    const [memeImage, setMemeImage] = useState("")
    function getMeme(){
        let memesArray = MemeData.data.memes;
        let randomMeme = Math.floor(Math.random()* memesArray.length)
        const id = memesArray[randomMeme].id;
        const name = memesArray[randomMeme].name;
        const url = memesArray[randomMeme].url;
        const width = memesArray[randomMeme].width;
        const height = memesArray[randomMeme].height;
        const box_count = memesArray[randomMeme].box_count;

        setMemeImage(url)
        console.log(id)

    }
  return (
    <>
    <div className='hero-section'>
        <div className='input-class'>
            <input type="text" id="input-1" name="" className ="input-box" placeholder='Top text'/>
            <input type="text" id="input-2" name="" className ="input-box" placeholder='Bottom Text'/>
        </div>
        <div className='btn-class'>
            <button  onClick={getMeme} className='get-image-btn'>
                <img src="../images/btn-img.png" alt="" />
            </button>
            
        </div>
        <div className='img-container'>
            <img className='rendered-img' src={memeImage} alt="Api-rendered-img" />
        </div>
        
    </div>
    </>
  )
}

export default Hero