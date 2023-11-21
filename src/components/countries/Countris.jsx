/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countris = () => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = country=>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        
    }

    return (
        <>
         <h3>countries: {countries.length}</h3>
         <h4>visited countries:{visitedCountries.length}</h4>
         <div>
         <ul>
            {
                visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
            }

         </ul>
         </div>
        <div className="countries">
            {
                countries.map(country => <Country key={country.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
        </div>
        </>
    );
};

export default Countris;