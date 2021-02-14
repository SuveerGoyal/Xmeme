const handleGetMemeById=(req,res,db)=>{
    //Destructure id from the endpoint paramaters
    const {id}=req.params
    //Select the meme with the particular id
    db.select('*').from('memes').where('id',id)
    .then(meme=>{
        //if an empty array is not returned, return the meme
        if(meme.length) res.json(meme);
        //if meme is not present return error
        else res.status(404).json("Meme with id not found")
    })
}


module.exports={
    handleGetMemeById
}