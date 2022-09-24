import React, { useContext, useState } from 'react'
import './RandomDishes.css'
import { AllMenuContext } from '../AllMenuContext/AllMenuContext'
import Popup from '../Popup/Popup'



function RandomDishes() {

    const [showPopup, setShowPopup] = useState(false)
    const [popupDish, setpopupDish] = useState([])
    const randomMenus = useContext(AllMenuContext)



    function displayPopup(dishName) {
        let popContent = randomMenus.filter((menuItem) => {
            return menuItem.strMeal === dishName
        })
            .map((item) => {
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

    let menuData = randomMenus.map((item, index) => {

        if (index < 12)
            return (
                <div>
                    <li onClick={() => displayPopup(item.strMeal)} ><img src={item.strMealThumb} alt="" /></li>
                    <li><h3>{item.strMeal}</h3></li>
                </div>
            )



    })

    return (
        <div className='container' >
            {showPopup && <Popup setShowPopup={setShowPopup}
                popupDish={popupDish} />}
            <h1>Our Special Dishes</h1>
            <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ea beatae ipsum esse exercitationem suscipit nostrum odio asperiores? Ipsam porro nulla sunt debitis facilis repudiandae.</p>

            <ul className='menuData'>{menuData}</ul>

        </div>

    )
}

export default RandomDishes