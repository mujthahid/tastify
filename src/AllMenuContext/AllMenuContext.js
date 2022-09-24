import {createContext,  useState, useEffect } from "react"
import Loader from '../Loader/Loader'


export const AllMenuContext = createContext()

export const AllMenu = ({children})=>{

    const [randomMenu, setRandomMenu] = useState([])
    const [loading, setLoading] = useState(true)

    async function getRandomMenu() {

    let API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        let response = await fetch(API_URL)
        let data = await response.json()
        setRandomMenu(data.meals)
        setLoading(false)
    }

    useEffect(() => {
        getRandomMenu()
      
    }, [])

    return(

        <AllMenuContext.Provider value={randomMenu}>
 
             {!loading === true ? children : <Loader/>}
            
             </AllMenuContext.Provider>
    )
}

