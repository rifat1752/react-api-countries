/* eslint-disable react/prop-types */
import './Country.css'

const Country = ({country}) => {
    const {name, flags} = country
    console.log(country)
    return (
        <div className='box'>
           <p>name: {name.common}</p> 
           <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;