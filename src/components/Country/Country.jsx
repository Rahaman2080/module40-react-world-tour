import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountry,  handleVisiteFlags}) => {
 
    const {name, flags,population, area, capital, continents,cca3, languages}= country;

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
           <h3 style={{color: visited?'red': 'black'}}>Country: {name?.common}</h3>
           <img src={flags?.png} alt="" />
           <h4>Capital: {capital}</h4>
           <h5>Population: {population}</h5>
           <h5>Area: {area} { } square km</h5>
           <h5>Language: </h5>
           <p><small>Code: {cca3}</small></p>
           <h5>Continent: {continents}</h5>
           <button onClick={()=> handleVisitedCountry(country)}>Mark visited</button>
           <br />
           <button onClick={()=>  handleVisiteFlags(country.flags.png)}>add flag</button>
           <br />
           <button onClick={handleVisited}>{visited?'Visited': 'Going'}</button>
           {visited? 'I have visited this country': 'I want to visit here'}

        </div>
    );
};

export default Country;