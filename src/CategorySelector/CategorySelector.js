import React, { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import './CategorySelector.css'
import Popup from '../Popup/Popup'


function CategorySelector() {
  const [showPopup,setShowPopup] = useState(false)
  const [categories, setCategories] = useState([])
  const [filteredDishes, setFilteredDishes] = useState([])
  const [activeDish, setActiveDish] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [popupDish, setpopupDish] = useState()
  let itemsPerPage = 4

  let indexOfLastDish = currentPage * itemsPerPage
  let indexOfFirstDish = indexOfLastDish - itemsPerPage

  async function getAllTheCategories() {
    let API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    let response = await fetch(API_URL)
    let categories = await response.json()
    setCategories(categories.categories)
    // setLoading(false)
  }


  let category = categories.map((item) => {
    return (

      <li onClick={() => getCategoryDishes(item.strCategory)} className={item.strCategory === activeDish ? "active" : ""}>
        <img src={item.strCategoryThumb} alt="" />
       <h3>{item.strCategory}</h3>
      </li>

    )
  })

  useEffect(() => {
    getAllTheCategories()
    getCategoryDishes('Beef')
  }, [])

  async function getCategoryDishes(category) {
    setActiveDish(category)
    setCurrentPage(1)
    let API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    let response = await fetch(API_URL)
    let categoryDishes = await response.json()
    setFilteredDishes(categoryDishes.meals)
  }

  

  async function displayPopup(dishName){
    let API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`
    let response = await fetch(API_URL)
    let filteredItem= await response.json()

   
    let popContent = filteredItem.meals.map((item) => {
      return (<div className='popup-content-inner'>
          <div className='popup-header'> <img src={item.strMealThumb} alt="" />
              <h2 className='popup-title'>{item.strMeal}</h2>
          </div>
          <h3 className='popup-category'>{item.strCategory}</h3>
          <div className='popup-aside'>
          <ul className='popup-ingredients'>
              <li>{item.strIngredient1}</li>
              <li>{item.strIngredient2}</li>
              <li>{item.strIngredient3}</li>
              <li>{item.strIngredient4}</li>
              <li>{item.strIngredient5}</li>
              <li>{item.strIngredient6}</li>
             
          </ul>
          <p className='popup-instructions'>{item.strInstructions}</p>
          </div>
      </div>

      )

  })
     setpopupDish(popContent)
     setShowPopup(true)
   
     }

  let categorySelection = filteredDishes.map((item) => {
    return (

      <li onClick={()=>displayPopup(item.strMeal)} >
        <img src={item.strMealThumb} alt="" />
        <h3>{item.strMeal}</h3>
      </li>


    )
  })

  let paginatedCategorySelection = categorySelection.slice(indexOfFirstDish, indexOfLastDish)

  return (<section >
    <div className='container'>
    {showPopup && <Popup setShowPopup={setShowPopup} popupDish={popupDish}/>} <br /> <hr/>
      <h2>Choose from the Categories</h2>
      <div className='categories' >
        <ul> {category}</ul>
      </div>

      <div className='categorySelection'>
        <ul >{paginatedCategorySelection}</ul>
      </div>
      <Pagination
        numOfItems={categorySelection.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </div>
  </section>
  )
}

export default CategorySelector