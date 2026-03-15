import React from 'react'
import "./Leftside.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMaximize2 } from "react-icons/fi";

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
      
      
    </div>
  )
}
