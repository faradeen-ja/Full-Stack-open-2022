import React, { useState, useEffect } from 'react'
import axios from "axios";
import DisplayCountry from "./components/DisplayCountry"


const App = () => {
    const [input, setInput] = useState(' ')
    const [countries, setCountries] = useState([])
    const [searchCountries, setSearchCountries] = useState([])


    const hook = () =>{
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((Response) => setCountries(Response.data))
    }
    useEffect(hook, [])

    const findCountries = (event) => {
        setInput(event.target.value)
        const searchCountries = countries.filter((country) => country.name.toUpperCase().includes(event.target.value.toUpperCase()) === true)
        setSearchCountries(searchCountries)
        
    }

    return(
        <div>
            <form>
                Find Countries <input value={input} onChange={findCountries} />
            </form>

            <DisplayCountry searchCountries={searchCountries} input={input} />
        </div>
    )

 }




 export default App
