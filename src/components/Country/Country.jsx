/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags,area,population} = country
    const [visited, setVisited] = useState(false)

    const handleVisited=() =>{
        setVisited(!visited);
        

    }

    const passWithParams=()=>{
        handleVisitedCountry(country);
    }
    return (
        <div className={`box ${visited && 'visited'}`}>
           <p>name: {name.common}</p> 
           <img className='flag' src={flags.png} alt="" />
           <p>Area: {area}</p>
           <p>Population:{population}</p>
           <button onClick={passWithParams}  className='btn'>marked visited</button>
           <button onClick={handleVisited} className='btn'>{visited ? 'visited':'going'}</button>
           
        </div>
    );
};

export default Country;