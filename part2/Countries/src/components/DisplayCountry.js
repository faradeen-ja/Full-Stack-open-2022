import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayCountry = (props) => {
    const details = props.specificCountry
    const [flag, setFlag] = useState(false)
    const showDetails = () => { setFlag(true) }

    if (!flag) {
        return (
            <>
                <span>{details.name}</span>&nbsp;
                <button onClick={showDetails}>show</button>
                <br />
            </>
        )
    } else if (flag) {
        return (
            <>
                <h1>{details.name}</h1>
                <div>capital {details.city}</div>
                <div>population {details.population}</div>
                <h2>languages</h2>
                {details.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                <br />
                <img src={details.flag} alt="flag" height="150" width="150" />
                <br />
            </>
        )
    }
}

const Weather = ({ city }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({})

    const hook = () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&query=${city}`)
        .then((response) => setWeather(response.data.current))
    }
    useEffect(hook, )
    return (
        <>
            <h2>Weather of {city}</h2>
            <div><strong>Temperature:</strong> {weather.temperature} Celcius</div>
            <img src={weather.weather.icon} alt="weather" />
            <div><strong>Wind:</strong> {weather.wind.speed} mph direction {weather.wind.direction}</div>
        </>
    )

}

const CountryDetails = ({ searchCountries, input }) => {
    if (input === '') {
        return (
            <></>
        )
    } else if (searchCountries.length > 10) {
        return (
            <div>Too many matches,specify another filter</div>
        )
    } else if (searchCountries.length === 1) {
        const country = searchCountries[0]

        return (
            <>
                <h1>{country.name}</h1>
                <div>Capital {country.capital}</div>
                <div>Population {country.population}</div>
                <h2>Languages</h2>
                {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                <br />
                <img src={country.flag} alt="flag" height="150" width="150" />
                <Weather city={country.city} />
            </>
        )
    } else {
        return (
            <>
                {searchCountries.map((specificCountry, i) => {
                    return (<DisplayCountry key={i} specificCountry={specificCountry} />)
                })}
            </>
        )
    }

}

export default CountryDetails