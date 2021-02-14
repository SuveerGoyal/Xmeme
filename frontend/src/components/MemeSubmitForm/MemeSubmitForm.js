import React,{useState} from "react";
import './MemeSubmitForm.css'


const MemeSubmitForm=({addMeme})=>{
    const [name,setName]=useState("");
    const [caption,setCaption]=useState("");
    const [imageUrl,setImageUrl]=useState("");

    const onNameChange=(event=>setName(event.target.value))
    const onCaptionChange=(event=>setCaption(event.target.value))
    const onImageUrlChange=(event=>setImageUrl(event.target.value))
    const onSubmit=()=>{
        fetch('http://localhost:8081/memes',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:name,
                caption:caption,
                imageUrl:imageUrl,
            })
        })
        addMeme({
            name:name,
            imageUrl:imageUrl,
            caption:caption
            })
        
    }

    return(
        <div className="form">
            <h2>Meme Stream</h2>
            <label>Meme Owner</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Enter your full name"
                onChange={onNameChange}
            />
            <label>Caption</label>
            <input
                type="text"
                name="Caption"
                id="caption"
                placeholder="Be Creative with your caption" 
                onChange={onCaptionChange}
            />
            <label>Meme URL</label>
            <input 
                type="text"
                name="ImageUrl"
                id="ImageUrl"
                placeholder="Enter url of your Meme here"
                onChange={onImageUrlChange}
            />
            <input
                type="submit"
                value="Submit"
                onClick={onSubmit}

            />
        </div>
    )


}











export default MemeSubmitForm