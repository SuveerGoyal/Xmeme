import React,{useState,useEffect} from 'react'
import './App.css';
import MemeSubmitForm from './components/MemeSubmitForm/MemeSubmitForm'
import MemeList from './components/MemeSubmitForm/MemeList'



function App() {
  const [memeList,setMemeList]=useState([]);
  const addMeme=(meme)=>{
    setMemeList(prevList=>[...prevList,meme])
  }

  useEffect(()=>{
    fetch('http://localhost:8081/memes')
    .then(response=>response.json())
    .then(data=>setMemeList(data));
   },[]);
  console.log("in here");
  return (
    <div>
      <h1 className='heading'>XMeme</h1>
      <div className="mainElement">
        <MemeSubmitForm addMeme={addMeme} />
        <MemeList memes={memeList}/>
      </div>
    </div>
  );
}

export default App;
