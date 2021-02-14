import React from "react"
import Meme from "./Meme.js"


const MemeList=({memes})=>{
    return(
        <div className="listAdjust">
            {
                memes.map((user,i)=>{
                    return(
                        <Meme
                            key={i}
                            name={user.name}
                            caption={user.caption}
                            imageUrl={user.imageUrl}
                         />
                    );
                }).reverse()
            }
        </div>
    )

}


export default MemeList