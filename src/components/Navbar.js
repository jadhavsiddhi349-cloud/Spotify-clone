import React from 'react'
import "./Navbar.css";
import { FaSpotify, FaHome,FaSearch,FaBell } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";


export default function Navbar() {
  return (
    <div className='navbar'>
         <div className="navbar-left">
          
        <FaSpotify className="logo-icon" />
         <FaHome className="home-icon" />
          </div>
          <div className='search-container '>
          <FaSearch className='search'/>
        <input className='search-bar' placeholder=' What do you want to play?'/>
        </div>
         <button className='premium-btn'>Explore premium</button>
        
        
        <div>
       
        <button className='install-btn'> <MdDownloadForOffline className="install-icon" />install App</button>
        </div>
        <FaBell className="nav-icon"/>
    
      <div className="navbar-right">
        <button className="login-btn">Login</button>
      </div>
    </div>
   



  );
}

