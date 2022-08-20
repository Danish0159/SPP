import React from 'react'
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";
import { countries, pakCities, saudiCities } from '../../../utils/constantsAr';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Location = ({ country, city, setCountry, setCity }) => {

    const location = useLocation();

    const history = useHistory();

    let title;

    if (localStorage.getItem("lang") === "en") {
        title = "Language";
    }
    else if (localStorage.getItem("lang") === "ar") {
        title = "اللغة";
    }
    else {
        title = "Language";
    }

    return (
        <Wrapper>
            <div className="location">
                <div className='location-dropdown'>
                    <label>{country} <ArrowDropDownIcon className='icon' color="action" /></label>
                    <select onChange={(e) => setCountry(e.target.value)}>
                        <option hidden>{country}</option>
                        {countries.map((item, index) => {
                            return (
                                <option key={index} value={item.value_ar} >
                                    {item.value_ar}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className='location-dropdown'>
                    <label>{city} <ArrowDropDownIcon className='icon' color="action" /></label>
                    <select onChange={(e) => setCity(e.target.value)}>
                        <option hidden>{city}</option>
                        {country === "پاکستان"
                            ? pakCities.map((item, index) => (
                                <option key={index} value={item.value_ar}>
                                    {item.value_ar}
                                </option>
                            ))
                            : country === "السعودية" ? saudiCities.map((item, index) => (
                                <option key={index} value={item.value_ar}>
                                    {item.value_ar}
                                </option>
                            )) : null}

                    </select>
                </div>

                <div className='language-dropdown'>
                    <label>{title} <ArrowDropDownIcon className='icon' color="action" /></label>
                    <select
                        onChange={(e) => {

                            let item;

                            if (e.target.value === "العربية") {
                                item = "ar";
                            }
                            else if (e.target.value === "English") {
                                item = "en";
                            }

                            if (item === "en") {

                                localStorage.setItem('lang', item);

                                document.title = "Construction Specialist Platform";

                                if (location.pathname.includes("/Usersar")) {
                                    history.push(`${location.pathname.replace("/Usersar", "/Users")}`);
                                }
                                else if (location.pathname.includes("/Projectsar")) {
                                    history.push(`${location.pathname.replace("/Projectsar", "/Projects")}`);
                                }
                                else if (location.pathname.includes("/Reviewar")) {
                                    history.push(`${location.pathname.replace("/Reviewar", "/Review")}`);
                                }
                                else {
                                    history.push(`${location.pathname.slice(0, location.pathname.length - 2)}`);
                                }

                                document.body.dir = "ltr";

                            }

                        }}
                    >
                        <option hidden>{title}</option>
                        <option>English</option>
                        <option>العربية</option>
                    </select>
                </div>


            </div>
        </Wrapper>
    )
}

export default Location;

const Wrapper = styled.div`

    position: sticky;
    top: 0;
    z-index: 1;

.location {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: whitesmoke;
    padding: 5px;
}

.location-dropdown {
    position: relative; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.location-dropdown label{
    position: absolute;
    width: auto;
    font-size: 3rem;
    text-align: center;
    color: #424d83;
}

.location-dropdown select {
    width: auto;
    background: none;
    font-size: 3rem;
    color: #424d83;
    text-align: center;
    cursor: pointer;
    opacity: 0;
}

.location-dropdown select option {
    background-color: whitesmoke;
    color: black;
    font-size: 2.2rem;
    text-align: center;

}

.language-dropdown {
    position: relative; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.language-dropdown label{
    position: absolute;
    width: auto;
    font-size: 3rem;
    text-align: center;
    color: #0303fc;
}

.language-dropdown select {
    width: auto;
    background: none;
    font-size: 3rem;
    color: #424d83;
    text-align: center;
    cursor: pointer;
    opacity: 0;
}

.language-dropdown select option {
    background-color: whitesmoke;
    color: black;
    font-size: 2.2rem;
    text-align: center;
}

.icon {
    font-size: 2.2rem;
}

@media only screen and (max-width: 850px) {
  
    .location-dropdown select, .location-dropdown label {
        font-size: 1.9rem;
    }
    .language-dropdown select, .language-dropdown label {
        font-size: 1.9rem;
    }
    .icon {
        font-size: 1.4rem;
    }
}

@media only screen and (max-width: 650px) {
  
    .location-dropdown select, .location-dropdown label {
        font-size: 1.5rem;
    }
    .language-dropdown select, .language-dropdown label {
          font-size: 1.5rem;
    }
    .icon {
        font-size: 1.1rem;
    }
    
}

`;