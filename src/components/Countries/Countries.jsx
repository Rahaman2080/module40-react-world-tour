import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFalgs] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = country => {
        // console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisiteFlags = flag =>{
        // console.log('flag adding success');
        const newVisitedFalgs = [...visitedFlags, flag];
        setVisitedFalgs(newVisitedFalgs);
    }

    // remove item from an array in a state
    // use filter to select all the element except the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>
            {/* display visited country's flags */}
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
            </div>
            {/* display country */}
           <div className="country-container">
           {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisiteFlags = { handleVisiteFlags}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;