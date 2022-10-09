import React from 'react'
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";
import { regions, albahahCities, aljawfCities, alqaseemCities, aseerCities, easternregionCities, hailCities, jazanCities, meccaCities, medinaCities, najranCities, northernbordersCities, riyadhCities, taboukCities } from '../../../utils/constantsAr';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';

const Location = ({ region, city, setRegion, setCity }) => {

    const location = useLocation();

    const history = useHistory();

    return (
        <Wrapper>
            <div className="location">
                <div className='location-dropdown'>
                    <label>{region} <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select
                        onChange={(e) => {
                            setRegion(e.target.value);
                            setCity("مدينة");
                            localStorage.setItem("locationAr", JSON.stringify({ region: e.target.value, city: "مدينة" }));
                        }}>
                        <option hidden></option>
                        {regions.map((item, index) => {
                            return (
                                <option key={index} value={item.value_ar} >
                                    {item.value_ar}
                                </option>
                            )
                        })}
                    </select>
                </div>

                <div className='location-dropdown'>
                    <label>{city} <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select
                        onChange={(e) => {
                            localStorage.setItem("locationAr", JSON.stringify({ region: region, city: e.target.value }));
                            setCity(e.target.value);
                        }}>
                        <option hidden></option>
                        {
                            region === "الباحة"
                                ? albahahCities.map((item, index) => (
                                    <option key={index} value={item.value_ar}>
                                        {item.value_ar}
                                    </option>
                                ))
                                : region === "الجوف"
                                    ? aljawfCities.map((item, index) => (
                                        <option key={index} value={item.value_ar}>
                                            {item.value_ar}
                                        </option>
                                    ))
                                    : region === "القصيم"
                                        ? alqaseemCities.map((item, index) => (
                                            <option key={index} value={item.value_ar}>
                                                {item.value_ar}
                                            </option>
                                        ))
                                        : region === "عسير"
                                            ? aseerCities.map((item, index) => (
                                                <option key={index} value={item.value_ar}>
                                                    {item.value_ar}
                                                </option>
                                            ))
                                            : region === "المنطقة الشرقية"
                                                ? easternregionCities.map((item, index) => (
                                                    <option key={index} value={item.value_ar}>
                                                        {item.value_ar}
                                                    </option>
                                                ))
                                                : region === "حائل"
                                                    ? hailCities.map((item, index) => (
                                                        <option key={index} value={item.value_ar}>
                                                            {item.value_ar}
                                                        </option>
                                                    ))
                                                    : region === "جازان"
                                                        ? jazanCities.map((item, index) => (
                                                            <option key={index} value={item.value_ar}>
                                                                {item.value_ar}
                                                            </option>
                                                        ))
                                                        : region === "مكة المكرمة"
                                                            ? meccaCities.map((item, index) => (
                                                                <option key={index} value={item.value_ar}>
                                                                    {item.value_ar}
                                                                </option>
                                                            ))
                                                            : region === "المدينة المنورة"
                                                                ? medinaCities.map((item, index) => (
                                                                    <option key={index} value={item.value_ar}>
                                                                        {item.value_ar}
                                                                    </option>
                                                                ))
                                                                : region === "نجران"
                                                                    ? najranCities.map((item, index) => (
                                                                        <option key={index} value={item.value_ar}>
                                                                            {item.value_ar}
                                                                        </option>
                                                                    ))
                                                                    : region === "الحدود الشمالية"
                                                                        ? northernbordersCities.map((item, index) => (
                                                                            <option key={index} value={item.value_ar}>
                                                                                {item.value_ar}
                                                                            </option>
                                                                        ))
                                                                        : region === "الرياض"
                                                                            ? riyadhCities.map((item, index) => (
                                                                                <option key={index} value={item.value_ar}>
                                                                                    {item.value_ar}
                                                                                </option>
                                                                            ))
                                                                            : region === "تبوك"
                                                                                ? taboukCities.map((item, index) => (
                                                                                    <option key={index} value={item.value_ar}>
                                                                                        {item.value_ar}
                                                                                    </option>
                                                                                ))
                                                                                : null
                        }
                    </select>
                </div>

                <div className='language-dropdown'>
                    <label><LanguageIcon className='globe-icon' /> العربية <ArrowDropDownIcon className='dropdown-icon' color="action" /></label>
                    <select
                        onChange={(e) => {

                            let item;

                            if (e.target.value === "English") {
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
                        <option hidden></option>
                        <option>العربية</option>
                        <option>English</option>
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