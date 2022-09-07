import React from 'react'
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";
import { countries, pakCities, saudiCities } from '../../../utils/constantsEn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';


const Location = ({ country, city, setCountry, setCity }) => {

    const location = useLocation();

    const history = useHistory();

    return (
        <Wrapper>
            <div className="location">
                <div className='location-dropdown'>
                    <label>{country} <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select onChange={(e) => setCountry(e.target.value)}>
                        <option hidden></option>
                        {countries.map((item, index) => {
                            return (
                                <option key={index} value={item.value_en} >
                                    {item.value_en}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className='location-dropdown'>
                    <label>{city} <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select onChange={(e) => setCity(e.target.value)}>
                        <option hidden></option>
                        {country === "Pakistan"
                            ? pakCities.map((item, index) => (
                                <option key={index} value={item.value_en}>
                                    {item.value_en}
                                </option>
                            ))
                            : country === "Saudia" ? saudiCities.map((item, index) => (
                                <option key={index} value={item.value_en}>
                                    {item.value_en}
                                </option>
                            )) : null}

                    </select>
                </div>

                <div className='language-dropdown'>
                    <label><LanguageIcon className='globe-icon' /> English <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select
                        onChange={(e) => {

                            let item;

                            if (e.target.value === "العربية") {
                                item = "ar";
                            }

                            if (item === "ar") {

                                localStorage.setItem('lang', item);

                                document.title = "منصة أخصائي البناء";

                                if (location.pathname.includes("/Users")) {
                                    history.push(`${location.pathname.replace("/Users", "/Usersar")}`);
                                }
                                else if (location.pathname.includes("/Projects")) {
                                    history.push(`${location.pathname.replace("/Projects", "/Projectsar")}`);
                                }
                                else if (location.pathname.includes("/Review")) {
                                    history.push(`${location.pathname.replace("/Review", "/Reviewar")}`);
                                }
                                else {
                                    history.push(`${location.pathname}ar`);
                                }

                                document.body.dir = "rtl";

                            }
                        }}
                    >
                        <option hidden></option>
                        <option>English</option>
                        <option>العربية</option>
                    </select>
                </div>


            </div>
        </Wrapper >
    )
}

export default Location

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
    font-size: 2rem;
    text-align: center;
    color: #2c36f5;
    display: flex;
    justify-content: center;
    align-items: center;
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

.dropdown-icon {
    font-size: 2.2rem;
}

.globe-icon {
    font-size: 4rem;
    color: grey;
}


@media only screen and (max-width: 850px) {
  
    .location-dropdown select, .location-dropdown label {
        font-size: 1.9rem;
    }
    .language-dropdown select {
        font-size: 1.9rem;
    }
    .language-dropdown label {
        font-size: 1.75rem;
    }
    .dropdown-icon {
        font-size: 1.4rem;
    }
    .globe-icon {
        font-size: 2.6rem;
    }
}



@media only screen and (max-width: 650px) {
  
    .location-dropdown select, .location-dropdown label {
        font-size: 1.5rem;
    }
    .language-dropdown select {
          font-size: 1.5rem;
    }
    .language-dropdown label {
        font-size: 1.3rem;
    }
    .dropdown-icon {
        font-size: 1.1rem;
    }
    .globe-icon {
        font-size: 2rem;
    }
    
}

`;