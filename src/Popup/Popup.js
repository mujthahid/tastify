import React from 'react'
import './Popup.css'
import {FaWindowClose} from 'react-icons/fa'
 function Popup(props) {

    function closePopup(){
        props.setShowPopup(false)
    }

   

return (
    <div className='popup'>
        <div className='popupContent'>{props.popupDish}
        <span className='close' onClick={closePopup}><FaWindowClose/></span>
        </div>
       </div>
  )
}

export default Popup
