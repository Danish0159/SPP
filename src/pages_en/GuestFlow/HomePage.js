import React, { useEffect, useState } from 'react';
import { NavbarHome } from '../../components_en/Navigations';
import { Contractors, Maintenance, Designers, Consultants } from '../../components_en/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_en/GuestFlow/HomePage'
import { Footer } from "../../components_en";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { regions, albahahCities, aljawfCities, alqaseemCities, aseerCities, easternregionCities, hailCities, jazanCities, meccaCities, medinaCities, najranCities, northernbordersCities, riyadhCities, taboukCities } from '../../utils/constantsEn';


const HomePage = () => {

    const [categoriesDataM, setCategoriesDataM] = useState(Maintenance); // M stands for Maintenance
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();

    const [region, setRegion] = useState("Region");
    const [city, setCity] = useState("City");


    useEffect(() => {

        let lang = localStorage.getItem('lang');

        if (lang === "ar") {
            history.replace('/ar');
        }

        const locationAr = JSON.parse(localStorage.getItem("locationAr"));
        const locationEn = JSON.parse(localStorage.getItem("locationEn"));

        if (locationAr) {
            let regionSelected = regions.find(item => item.value_ar === locationAr.region);

            let citySelected;

            if (regionSelected.value_ar === "الباحة") {
                citySelected = albahahCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "الجوف") {
                citySelected = aljawfCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "القصيم") {
                citySelected = alqaseemCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "عسير") {
                citySelected = aseerCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "المنطقة الشرقية") {
                citySelected = easternregionCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "حائل") {
                citySelected = hailCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "جازان") {
                citySelected = jazanCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "مكة المكرمة") {
                citySelected = meccaCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "المدينة المنورة") {
                citySelected = medinaCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "نجران") {
                citySelected = najranCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "الحدود الشمالية") {
                citySelected = northernbordersCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "الرياض") {
                citySelected = riyadhCities.find(item => item.value_ar === locationAr.city)
            }
            else if (regionSelected.value_ar === "تبوك") {
                citySelected = taboukCities.find(item => item.value_ar === locationAr.city)
            }

            setRegion(regionSelected ? regionSelected.value_en : "Region");
            setCity(citySelected ? citySelected.value_en : "City");

            localStorage.setItem("locationEn", JSON.stringify({ region: regionSelected ? regionSelected.value_en : "Region", city: citySelected ? citySelected.value_en : "City" }));
        }
        else if (locationEn) {
            setRegion(locationEn ? locationEn.region : "Region");
            setCity(locationEn ? locationEn.city : "City");
        }
        else {
            swal({
                title: "Select Region and City",
                icon: "success",
                text: "For Searching Best Construction Experts In Your Locality"
            })
        }

    }, [history])


    const HomeValues = {
        region, city, setRegion, setCity, setCategoriesDataM, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF,
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