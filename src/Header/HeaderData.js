import React from 'react'
import './HeaderData.css'
import { SiIfood} from "react-icons/si";

function HeaderData() {
return (
    <div id='header'>
      <section className='nav'>
        <h1>Tastify <span><SiIfood/></span></h1>
        <ul>
           <li><a href="#home">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#contact">Contact</a></li>
        
        </ul>
      </section>



    </div>
  )
}

export default HeaderData