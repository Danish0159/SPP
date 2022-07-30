import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavbarHome } from '../../components_en/Navigations';
import { Contractors, Handymen, Designers, Consultants } from '../../components_en/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_en/GuestFlow/HomePage'
import { useDispatch, useSelector } from "react-redux";
import { Footer, Spinner } from "../../components_en";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { reset } from '../../features/guest/guestSlice';
import { toast } from 'react-toastify';

const HomePage = () => {

    const [categoriesDataH, setCategoriesDataH] = useState(Handymen); // H stands for Handymen
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();
    const dispatch = useDispatch();

    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");

    //State. (API Call IN RoleSubSections Component).
    const { isLoading, isSuccess, isError } = useSelector(
        (state) => state.guest
    );

    useEffect(() => {
        if (isError) {
            toast.error(isError);
            dispatch(reset());
        }
        if (isSuccess) {
            history.push("/Users");
            dispatch(reset());
        }
        const location = JSON.parse(localStorage.getItem("locationEn"));
        if (location) {
            setCountry(location.country);
            setCity(location.city);
        }
        else {
            setCountry("Country");
            setCity("City");
        }
        // eslint-disable-next-line
    }, [isSuccess, isError]);

    if (isLoading) {
        return (
            <div className="section-100vh">
                <Spinner />;
            </div>
        );
    }

    const HomeValues = {
        country, city, setCity, setCountry, setCategoriesDataH, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF,
    }

    return (
        <>
            <NavbarHome {...HomeValues}></NavbarHome>
            <Location {...HomeValues}></Location>
            <Hero></Hero>

            <RoleSubSections
                {...HomeValues}
                id="Handymen"
                role="Handyman"
                roleData={Handymen}
                roleCategories={categoriesDataH}
                roleCategoriesUpdate={setCategoriesDataH}
            ></RoleSubSections>
            <Seperator></Seperator>
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