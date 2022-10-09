import React, { useEffect, useState } from 'react';
import { NavbarHome } from '../../components_ar/Navigations';
import { Contractors, Maintenance, Designers, Consultants } from '../../components_ar/GuestFlow/HomePage/categoriesData';
import { Location, RoleSubSections, Hero } from '../../components_ar/GuestFlow/HomePage'
import { Footer } from "../../components_ar";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { regions, albahahCities, aljawfCities, alqaseemCities, aseerCities, easternregionCities, hailCities, jazanCities, meccaCities, medinaCities, najranCities, northernbordersCities, riyadhCities, taboukCities } from '../../utils/constantsAr';


const HomePage = () => {

    const [categoriesDataM, setCategoriesDataM] = useState(Maintenance); // M stands for Maintenance
    const [categoriesDataC, setCategoriesDataC] = useState(Contractors); // C stands for Contractors
    const [categoriesDataD, setCategoriesDataD] = useState(Designers); // D stands for Designers 
    const [categoriesDataCF, setCategoriesDataCF] = useState(Consultants); //C stands for Consultant Firms

    const history = useHistory();

    const [region, setRegion] = useState("منطقة");
    const [city, setCity] = useState("مدينة");

    useEffect(() => {
        let lang = localStorage.getItem('lang');

        if (lang === "en") {
            history.replace('/');
        }

        const locationEn = JSON.parse(localStorage.getItem("locationEn"));
        const locationAr = JSON.parse(localStorage.getItem("locationAr"));

        if (locationEn) {
            let regionSelected = regions.find(item => item.value_en === locationEn.region);

            let citySelected;

            if (regionSelected.value_en === "Al-Bahah") {
                citySelected = albahahCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Al-Jawf") {
                citySelected = aljawfCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Al-Qaseem") {
                citySelected = alqaseemCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Aseer") {
                citySelected = aseerCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Eastern Region") {
                citySelected = easternregionCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Ḥā'il") {
                citySelected = hailCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Jazan") {
                citySelected = jazanCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Mecca") {
                citySelected = meccaCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Medina") {
                citySelected = medinaCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Najrān") {
                citySelected = najranCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Northern Borders") {
                citySelected = northernbordersCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Riyadh") {
                citySelected = riyadhCities.find(item => item.value_en === locationEn.city)
            }
            else if (regionSelected.value_en === "Tabouk") {
                citySelected = taboukCities.find(item => item.value_en === locationEn.city)
            }

            setRegion(regionSelected ? regionSelected.value_ar : "منطقة");
            setCity(citySelected ? citySelected.value_ar : "مدينة");

            localStorage.setItem("locationAr", JSON.stringify({ region: regionSelected ? regionSelected.value_ar : "منطقة", city: citySelected ? citySelected.value_ar : "مدينة" }));
        }
        else if (locationAr) {
            setRegion(locationAr ? locationAr.region : "منطقة");
            setCity(locationAr ? locationAr.city : "مدينة");
        }
        else {
            swal({
                title: "حدد المنطقة والمدينة",
                icon: "success",
                text: "للبحث عن أفضل خبراء البناء في منطقتك"
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
                role="مقاول"
                roleData={Contractors}
                roleCategories={categoriesDataC}
                roleCategoriesUpdate={setCategoriesDataC}
            ></RoleSubSections>
            <Seperator></Seperator>
            <RoleSubSections
                {...HomeValues}
                id="Handymen"
                role="صيانة"
                roleData={Maintenance}
                roleCategories={categoriesDataM}
                roleCategoriesUpdate={setCategoriesDataM}
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
                role="استشاري"
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