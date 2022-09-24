import React from 'react'
import HeaderData from "../Header/HeaderData";
import Banner from "../Banner/Banner";
import CategorySelector from '../CategorySelector/CategorySelector'
import RandomDishes from '../RandomDishes/RandomDishes'
import { AllMenu } from '../AllMenuContext/AllMenuContext';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Copyright from '../Copyright/Copyright';


function Menu() {

    return (
        <div>
           
                <HeaderData />
                <Banner />
                <AllMenu>
                <RandomDishes />
                <CategorySelector />
            </AllMenu>
            <About/>
            <Contact/>
            <Copyright/>
        </div>
    )
}

export default Menu