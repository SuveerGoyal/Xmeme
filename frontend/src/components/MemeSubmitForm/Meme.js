import React from "react";
import './Meme.css'

const Memes=({name,caption,imageUrl})=>{

    return(
        <div className='adjustMeme'>
            <h3>{name}</h3>
            <p>{caption}</p>
            <img className="MemeImage" alt='Meme' src={imageUrl}/>
        </div>
    )
}


export default Memes



