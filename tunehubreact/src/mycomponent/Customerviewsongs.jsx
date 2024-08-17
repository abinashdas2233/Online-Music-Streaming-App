import Customernavbar from './Customernavbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lastcont from './Lastcont';
import './Customerviewsongs.css';

function Customerviewsongs(props) {
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSongs() {
      try {
        const response = await axios.get("http://localhost:8080/map-viewsong"); 
        setSongsList(response.data);
      } catch (error) {
        setError('Error fetching songs. Please try again later.');
        console.error('Error fetching songs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSongs();
  }, []);

  return (
    <>
      <Customernavbar />
      <div className="chome">
        <div id="middiv">
          {loading ? (
            <p>Loading songs...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <table className="songs-table">
              <thead>
                <tr>
                  <th>Genre</th>
                  <th>Song Name</th>
                  <th>Artist</th>
                  <th>Media Player</th>
                </tr>
              </thead>
              <tbody>
                {songsList.map((song) => (
                  <tr key={song.id}> {/* Assuming `song.id` is unique */}
                    <td><img  className="ims" src={song.genre.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')} alt={`${song.name} genre`} /></td>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>
                      <audio controls>
                        <source src={song.link.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Lastcont vdata={props.idata} />
      </div>
    </>
  );
}

export default Customerviewsongs;
