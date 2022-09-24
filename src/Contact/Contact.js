import React from 'react'
import './Contact.css'
import { FaMobile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { BsLinkedin} from "react-icons/bs";
import { AiFillInstagram} from "react-icons/ai";
import { RiWhatsappFill} from "react-icons/ri";


function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className="address">
        <h4>Contact us</h4>
        <ul>
            <li> Mujthahid K</li>
            <li> Sukrutham H</li>
            <li> Velluvangad P.O</li>
            <li> Malappuram DT, Kerala</li>
            </ul>
          
           <p><span><FaMobile /></span> +91 7907174773</p>
          <p><span><IoMail /></span> mujthahidk@gmail.com</p> 
         </div>
        <div className="socialMedia">
<h4>Connect us on social media</h4>
<ul>
    <li><a href="https://www.linkedin.com/in/mujthahid-k-650709125"><BsLinkedin/></a></li>
    <li><a href="https://www.instagram.com/mujthahid_k/"><AiFillInstagram/></a></li>
    <li><a href="https://wa.me/message/O2ABJBD7CTNID1"><RiWhatsappFill/></a></li>
</ul>

        </div>
    
    </div>
  )
}

export default Contact