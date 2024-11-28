import React from 'react'
import './Foot.css'
const Foot = () => {
  return (
   <>
  
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>About MusicVerse</h4>
                <p>Your go-to platform for streaming and discovering amazing music.</p>
            </div>
            <div class="footer-section">
                <h4>Explore</h4>
                <ul>
                    <li><a href="#">Playlists</a></li>
                    <li><a href="#">Top Charts</a></li>
                    <li><a href="#">New Releases</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Artists</h4>
                <ul>
                    <li><a href="#">Featured Artists</a></li>
                    <li><a href="#">Genres</a></li>
                    <li><a href="#">Live Shows</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="#">&#127926;</a>
                    <a href="#">&#127911;</a>
                    <a href="#">&#128247;</a>
                </div>
            </div>
        </div>
    </footer>
   </>
  )
}

export default Foot