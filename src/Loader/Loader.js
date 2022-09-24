import React from 'react'
import './Loader.css'


function Loader() {
  return (
    <div className='loader'>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
       <h1>loading..</h1> 
    </div>
  )
}

export default Loader