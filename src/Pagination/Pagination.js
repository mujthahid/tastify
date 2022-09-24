import React from 'react'
import './Pagination.css'

function Pagination(props) {

let numberOfPages = []

for(let i=1; i<= Math.ceil(props.numOfItems/props.itemsPerPage); i++){
    numberOfPages.push(i)
}


function paginator(pageNumber){
    
   props.setCurrentPage(pageNumber)
    }

let pages = numberOfPages.map((pageNumber)=>{
    return(
      <li onClick={()=>paginator(pageNumber)} className={pageNumber === props.currentPage ? 'activePage' : ''} >{pageNumber}</li>
    )
})





    return (
    <div>
        <ul className='pagination'>
{pages}
        </ul>
        </div>
        )
}

export default Pagination