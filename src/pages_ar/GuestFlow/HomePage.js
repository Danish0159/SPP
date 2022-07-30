import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavbarHome } from '../../components_ar/Navigations';
import { Contractors, Handymen, Designers, Consultants } from '../../components_ar/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_ar/GuestFlow/HomePage'
import { useDispatch, useSelector } from "react-redux";
import { Footer, Spinner } from "../../components_ar";
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

    const [country, setCountry] = useState("دولة");
    const [city, setCity] = useState("مدينة");



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
            history.push("/Usersar");
            dispatch(reset());
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
                role_en="Handyman"
                role_ar="عامل يدوي"
                roleData={Handymen}
                roleCategories={categoriesDataH}
                roleCategoriesUpdate={setCategoriesDataH}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Contractors"
                role_en="Contractor"
                role_ar="مقاول"
                roleData={Contractors}
                roleCategories={categoriesDataC}
                roleCategoriesUpdate={setCategoriesDataC}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Designers"
                role_en="Designer"
                role_ar="مصمم"
                roleData={Designers}
                roleCategories={categoriesDataD}
                roleCategoriesUpdate={setCategoriesDataD}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Consultants"
                role_en="Consultant"
                role_ar="مستشار"
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