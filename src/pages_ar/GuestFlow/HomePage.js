import React, { useEffect, useState } from 'react';
import { NavbarHome } from '../../components_ar/Navigations';
import { Contractors, Handymen, Designers, Consultants } from '../../components_ar/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_ar/GuestFlow/HomePage'
import { Footer } from "../../components_ar";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const [categoriesDataH, setCategoriesDataH] = useState(Handymen); // H stands for Handymen
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();

    const [country, setCountry] = useState("دولة");
    const [city, setCity] = useState("مدينة");

    useEffect(() => {
        let lang = localStorage.getItem('lang');

        if(lang === "en")
        {
            history.replace('/');
        }

        const location = JSON.parse(localStorage.getItem("locationAr"));
        if (location) {
            setCountry(location.country);
            setCity(location.city);
        }
        else {
            setCountry("دولة");
            setCity("مدينة");
        }

    }, [history])

    const HomeValues = {
        country, city, setCity, setCountry, setCategoriesDataH, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF,
    }

    return (
        <>
            <NavbarHome></NavbarHome>
            <Location {...HomeValues}></Location>
            <Hero></Hero>

            
            <RoleSubSections
                {...HomeValues}
                id="Contractors"
                role="مقاول"
                roleData={Contractors}
                roleCategories={categoriesDataC}
                roleCategoriesUpdate={setCategoriesDataC}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Handymen"
                role="عامل يدوي"
                roleData={Handymen}
                roleCategories={categoriesDataH}
                roleCategoriesUpdate={setCategoriesDataH}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Designers"
                role="مصمم"
                roleData={Designers}
                roleCategories={categoriesDataD}
                roleCategoriesUpdate={setCategoriesDataD}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Consultants"
                role="مستشار"
                roleData={Consultants}
                roleCategories={categoriesDataCF}
                roleCategoriesUpdate={setCategoriesDataCF}
            ></RoleSubSections>
            {/* Footer. */}
            <Footer></Footer>
        </>
    );
};

export default HomePage;

const Seperator = () => {
    return (
        <Wrapper>
            <div className='separator'>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.separator {
    height: 75px;
    width: 100%;
    background-color: #424d83;
}
`