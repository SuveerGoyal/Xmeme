const handleGetMemes=(req,res,db)=>{
    //Get the top 100 memes from the database
    db.select('*').from('memes').limit(100)
    .then(meme=>{
        //Return the meme array as a Json object
        res.json(meme);
    })
    //Return error if unable to get the memes
    .catch(err=>res.status(400).json(err))
}

module.exports={
    handleGetMemes
}