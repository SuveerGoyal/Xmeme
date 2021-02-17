const express=require("express")
const cors=require("cors");
const knex=require('knex')
const postMeme=require('./controllers/postMeme')
const getMemes=require('./controllers/getMemes')
const getMemeById=require('./controllers/getMemeById')
const app=express();
app.use(express.json())
app.use(cors())


//Initialize Postrgesql Database with Knex query builder
const db=knex({
    client:'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'test',
        database : 'xmeme'
      }
})

//Check response at root endpoint
app.get('/',(req,res)=>{
    res.send("The api is working");
})


//Call function to post memes
app.post('/memes',(req,res)=>postMeme.handlePostMeme(req,res,db));

//Call function to get memes
app.get('/memes',(req,res)=>getMemes.handleGetMemes(req,res,db));

//Call function to get a meme by id
app.get('/memes/:id',(req,res)=>getMemeById.handleGetMemeById(req,res,db))



app.listen(process.env.PORT || 8081,()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})
