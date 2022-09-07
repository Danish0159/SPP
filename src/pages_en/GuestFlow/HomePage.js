import React, { useEffect, useState } from 'react';
import { NavbarHome } from '../../components_en/Navigations';
import { Contractors, Maintenance, Designers, Consultants } from '../../components_en/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_en/GuestFlow/HomePage'
import { Footer } from "../../components_en";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const HomePage = () => {

    const [categoriesDataM, setCategoriesDataM] = useState(Maintenance); // M stands for Maintenance
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();

    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");


    useEffect(() => {



        let lang = localStorage.getItem('lang');

        if (lang === "ar") {
            history.replace('/ar');
        }

        const location = JSON.parse(localStorage.getItem("locationEn"));
        if (location) {
            setCountry(location.country);
            setCity(location.city);
        }
        else {
            swal({
                title: "Select Country and City",
                icon: "success",
                text: "For Searching Best Construction Experts In Your Locality"
            })
        }

    }, [history])


    const HomeValues = {
        country, city, setCity, setCountry, setCategoriesDataM, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF,
    }

    return (
        <>
            <NavbarHome></NavbarHome>
            <Location {...HomeValues}></Location>
            <Hero></Hero>

            <RoleSubSections
                {...HomeValues}
                id="Contractors"
                role="Contractor"
                roleData={Contractors}
                roleCategories={categoriesDataC}
                roleCategoriesUpdate={setCategoriesDataC}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Maintenance"
                role="Maintenance"
                roleData={Maintenance}
                roleCategories={categoriesDataM}
                roleCategoriesUpdate={setCategoriesDataM}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Designers"
                role="Designer"
                roleData={Designers}
                roleCategories={categoriesDataD}
                roleCategoriesUpdate={setCategoriesDataD}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Consultants"
                role="Consultant"
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