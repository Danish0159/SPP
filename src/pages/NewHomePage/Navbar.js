import React, { useEffect, useState } from 'react';
import './newHomePage.css';
import logo from '../../images/logo2.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import { pakCities, saudiCities } from '../../utils/constants';


const Navbar = () => {

    // const [locationData, setLocationData] = useState({});

    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");



    useEffect(() => {

        axios.get('https://api.ipify.org?format=json').then((response)=>{

            axios.get(`https://api.ipfind.com/?ip=${response.data.ip}`).then((response)=>{
            // console.log(response.data);
            setCountry(response.data.country);
            setCity(response.data.city);
            
        })
        })

       
        
        // axios.get("https://ip-api.com/json").then((response) => {
        //     setCountry(response.data.country);
        //     setCity(response.data.city);
        // })


    }, [])

    return (
        <div className='navbar'>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt='logo' />
            </Link>
            <div className='navbar-dropdown'>
                <select onChange={(e)=>{setCountry(e.target.value)}}>
                    <option hidden>{country}</option>
                    <option>Pakistan</option>
                    <option>Saudia</option>
                </select>
            </div>

            <div className='navbar-dropdown'>
                <select>
                    <option hidden>{city}</option>
                    <option disabled>none</option>
                    {country === "Pakistan"
                        ? pakCities.map((item, index) => (
                            <option key={index}>
                                {item.label}
                            </option>
                        ))
                        : country === "Saudia" ? saudiCities.map((item, index) => (
                            <option key={index}>
                                {item.label}
                            </option>
                        )) : null}

                </select>
            </div>





            <Link to='/Login' >
                <button className='navbar-btn'>
                    Log in
                </button>
            </Link>

        </div>
    );
};

export default Navbar;