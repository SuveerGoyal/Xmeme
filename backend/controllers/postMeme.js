const handlePostMeme=(req,res,db)=>{
    //Get name,caption,url from the request body
    const {name,caption,url}=req.body; 

    //Return error if name or ImageUrl field is empty
    if(!name || !url) res.status(400).json("Empty name or url ");

    else{
        //Insert values the memes table 
        db('memes').insert({
            name:name,
            url:url,
            caption:caption,
        })
        .returning('id') // return the id on success
        //returning response as the id of the meme
        .then(currentId=>{
            res.json({
                id:currentId[0],
            });
        })
        //return error if post request cannot be handled
        .catch(err=>res.status(400).json(err));
     }
}


module.exports={
    handlePostMeme
}
