import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { NavbarHome } from '../../components/Navigations';
import { Contractors, Handymen, Designers, Consultants } from '../../components/GuestFlow/HomePage/categoriesData';
import { GlobalSearch, RoleSubSections, Hero } from '../../components/GuestFlow/HomePage'
import { useDispatch, useSelector } from "react-redux";
import { Footer, Spinner } from "../../components";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { reset } from '../../slices/users';
import { toast } from 'react-toastify';

const HomePage = () => {
    const [categoriesDataH, setCategoriesDataH] = useState(Handymen); // H stands for HandymenConsultants
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();
    const dispatch = useDispatch();


    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");

    //State. (API Call IN RoleSubSections Component).
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.users
    );
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            history.push("/Users");
        }
        setCountry("Country");
        setCity("City");
        dispatch(reset());
    }, [isError, isSuccess, message, dispatch]);

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
            <GlobalSearch {...HomeValues}></GlobalSearch>
            <Hero></Hero>

            <RoleSubSections
                {...HomeValues}
                role="Handymen"
                roleData={Handymen}
                roleCategories={categoriesDataH}
                roleCategoriesUpdate={setCategoriesDataH}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                role="Contractors"
                roleData={Contractors}
                roleCategories={categoriesDataC}
                roleCategoriesUpdate={setCategoriesDataC}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                role="Designers"
                roleData={Designers}
                roleCategories={categoriesDataD}
                roleCategoriesUpdate={setCategoriesDataD}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                role="Consultants"
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