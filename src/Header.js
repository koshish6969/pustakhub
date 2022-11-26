import React from 'react'
import logo from './components/logo.png'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";


function Header() {
   
  return (
    <div className='header'>
        <img className="header_logo" src={logo}></img>
  
    
    <div className="header_option">
    <ul>
            <li><a href="#">Home</a></li>
       <li><a href="#about" smooth>About</a></li> 
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
      <div className="header_icons">
      
      <input type="text" label="What are you looking for?"></input>
       <SearchIcon className='header_searchIcon'/>
      
       <PersonIcon className='header_personIcon'/>
      </div>
    </div>
  )
}

export default Header


