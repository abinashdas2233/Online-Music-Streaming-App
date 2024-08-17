import React, { useState } from 'react';
import Adminnavbar from './Adminnavbar';
import axios from 'axios';
import './Aaddsongs.css'

function Aaddsongs() {
  const [name, setname] = useState(' ');
  const [artist, setArtist] = useState(' ');
  const [genre, setGenre] = useState(' ');
  const [link, setLink] = useState(' ');
  const [response,Setresponse]=useState(' ');

  const handleAddSong = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/addsongs", {
        name,
        artist,
        genre,
        link
      });
      console.log(response.data); 
      
     if(response.data==="songsuccess"){
      Setresponse("song successfully added")
     }
     else{
      Setresponse("song failed to add")
     }
    } catch (error) {
      console.error('Error adding song:', error);
      Setresponse="server side error"
    }
  };

  return (
    <>
      <Adminnavbar />
     <div id="mainh1">
      <div id="imd">
      <div id="tsd" ></div>
      </div>
      <div id="hld"> 
        <form onSubmit={handleAddSong} className='for'>
        <label>Song name-<input type='text' name='songname' value={name} onChange={(e) => setname(e.target.value)} /></label>
        <br /><br />
        <label>Artist-<input type='text' name='artist' value={artist} onChange={(e) => setArtist(e.target.value)} /></label>
        <br /><br />
        <label>Genre-<input type='text' name='genre' value={genre} onChange={(e) => setGenre(e.target.value)} /></label>
        <br /><br />
        <label>Link-<input type='text' name='link' value={link} onChange={(e) => setLink(e.target.value)} /></label>
       <br/><br/>
     <input type='submit' id='mbtn' value='submit' />
<p>{response}</p>
      </form></div>
     </div>
     

    
      
     
    </>
  );
}

export default Aaddsongs;
