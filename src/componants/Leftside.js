import React from 'react'
import "./Leftside.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMaximize2 } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import likedImg from "./liked.jfif";
import arijitImg from "./arijit.jfif";
import DarshanImg from "./Darshan.jfif";


export default function Leftside() {
  return (
    <div className='left-library'>
      <div className='library-icon'>
      <h6 className='library-name'>Your Library</h6>
      <AiOutlinePlus className='plus-icon'/>
      <FiMaximize2 className='arrow-icon'/>
      </div>
      
      <div className='playlist-name'>
      <h6>playlists</h6>
        </div>
        <div className='arstists-name'>
      <h6>Artists</h6>
      </div>
      <div className='searchrecents-icon'>
        <FaSearch className='search'/>
        <span className='recent'>recents</span>
        <HiOutlineBars3BottomLeft className='recents-icon'/>

      </div>
      <div className="library-list">

  {/* Liked Songs */}
  <div className="library-item">
    <img src={likedImg} alt="liked" className="liked-img" />
    <div className="text">
      <h6>Liked Songs</h6>
      <p>Playlist • 83 songs</p>
    </div>
  </div>

  {/* Artist */}
  <div className="library-item">
    <img src={arijitImg} alt="arijit" className="artist-img" />
    <div className="text">
      <h6>Arijit Singh</h6>
      <p>Artist</p>
    </div>
  </div>

  {/* Artist */}
  <div className="library-item">
    <img src={DarshanImg} alt="darshan" className="artist-img" />
    <div className="text">
      <h6>Darshan Raval</h6>
      <p>Artist</p>
    </div>
  </div>

</div>
      
  



      </div>
      
      
    
  )
}
