import React from 'react'
import styled from 'styled-components';
import { useLocation, useHistory } from "react-router-dom";
import { countries, pakCities, saudiCities } from '../../../utils/constantsAr';


const Location = ({ country, city, setCountry, setCity }) => {

    const location = useLocation();

    const history = useHistory();

    let title;

    if (localStorage.getItem("lang") === "en") {
        title = "English";
    }
    else if (localStorage.getItem("lang") === "ar") {
        title = "العربية";
    }
    else {
        title = "English";
    }

    // Location API.
    // useEffect(() => {
    //   axios.get('https://api.ipify.org?format=json').then((response) => {
    //     axios.get(`https://api.ipfind.com/?ip=${response.data.ip}`).then((response) => {
    //       setCountry(response.data.country);
    //       setCity(response.data.city);
    //     })
    //   })
    // }, [])

    return (
        <Wrapper>
            <div className="location">
                <div className='location-dropdown'>
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

                <div className='language-dropdown'>
                    <select
                        onChange={(e) => {

                            let item;

                            if (e.target.value === "العربية") {
                                item = "ar";
                            }
                            else if (e.target.value === "English") {
                                item = "en";
                            }

                            localStorage.setItem('lang', item);

                            if (item === "ar") {

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
                            else if (item === "en") {

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

                <div className='location-dropdown'>
                    <select onChange={(e) => setCity(e.target.value)}>
                        <option hidden>{city}</option>
                        {country === "پاکستان"
                            ? pakCities.map((item, index) => (
                                <option key={index} value={item.value_ar}>
                                    {item.value_ar}
                                </option>
                            ))
                            : country === "المملكة العربية السعودية" ? saudiCities.map((item, index) => (
                                <option key={index} value={item.value_ar}>
                                    {item.value_ar}
                                </option>
                            )) : null}

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
    background-color: whitesmoke;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
}

.location-dropdown {
    font-weight: 700;
    font-size: 3rem;
    
}
.location-dropdown select {
  background: none;
  border: none;
  font-size: 3rem;
  color: #424d83;
  cursor: pointer;
  width: 210px;
  text-align: center;
}
.location-dropdown select option {
    color: black;
    background-color: whitesmoke;
    width: 100%;
    font-size: 2.2rem;
    text-align: center;
}

.language-dropdown {
    font-weight: 700;
    font-size: 3rem;    
}

.language-dropdown select {
  background: none;
  border: none;
  font-size: 3rem;
  color: #0303fc;
  cursor: pointer;
  width: 210px;
  text-align: center;
}
.language-dropdown select option {
    color: black;
    background-color: whitesmoke;
    width: 100%;
    font-size: 2.2rem;
    text-align: center;
}

@media only screen and (max-width: 850px) {
  
.location-dropdown select {
  font-size: 1.9rem;
  width: 150px;
}
.language-dropdown select {
    font-size: 1.9rem;
    width: 150px;
  }
}

@media only screen and (max-width: 650px) {
  
    .location-dropdown select {
      font-size: 1.7rem;
      width: 100px;
    }
    .language-dropdown select {
        font-size: 1.7rem;
        width: 100px;
      }
    .location {
        background-color: whitesmoke;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
`;