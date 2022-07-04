import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../images/logo3.png";
import styled from "styled-components";
import { pakCities, saudiCities } from '../../utils/constants';
import axios from "axios";

const NavbarHome = ({ country, city, setCountry, setCity, }) => {
  const { t } = useTranslation();

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json').then((response) => {
      axios.get(`https://api.ipfind.com/?ip=${response.data.ip}`).then((response) => {
        setCountry(response.data.country);
        setCity(response.data.city);
      })
    })
  }, [])

  return (
    <Wrapper>
      <div className="nav__parent">
        <div className="nav__container">
          {/* Logo. */}
          <Link to="/">
            <img className="navbar__logo" src={logo} alt="Logo" />
          </Link>

          <div className='navbar-dropdown'>
            <select onChange={(e) => { setCountry(e.target.value) }}>
              <option hidden>{country}</option>
              <option>Pakistan</option>
              <option>Saudi Arabia</option>
            </select>
          </div>

          <div className='navbar-dropdown'>
            <select onChange={(e) => { setCity(e.target.value) }}>
              <option hidden>{city}</option>
              <option disabled>none</option>
              {country === "Pakistan"
                ? pakCities.map((item, index) => (
                  <option key={index}>
                    {item}
                  </option>
                ))
                : country === "Saudi Arabia" ? saudiCities.map((item, index) => (
                  <option key={index}>
                    {item}
                  </option>
                )) : null}

            </select>
          </div>
          {/* Navbar. */}
          <Link to="/Login" className="btn-small btn-nav">
            {t("home_login")}
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default NavbarHome;

const Wrapper = styled.section`
.navbar-dropdown {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    color: white;
}
.navbar-dropdown select {
  background: none;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  width: 210px;
  text-align: center;
}
.navbar-dropdown select option {
    color: black;
    width: 100%;
    font-size: 2.2rem;
    text-align: center;
}
@media screen and (max-width:790px) {
    .navbar-dropdown {
        display: none;
    }
}
`;