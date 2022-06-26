import React, { useEffect, useState } from 'react';
import './newHomePage.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { contractors, handymen, designersAndConsultantFirms } from './categoriesData';
import noDataFound from '../../images/ndf.jpg';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, reset } from "../../slices/users";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import Navbar from '../../components/Navbar';
import { Footer, Hero } from "../../components"
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const NewHomePage = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem("user"));
    // If user is already logedIN and trying to access the homePage, Redirect him to HomeFeed Page.
    if (user && user.profile) {
        history.push("/HomeFeed");
    }
    else if (user && !user.profile) {
        history.push("/joinus");
    }
    else {
        history.push("/");
    }

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1300: { items: 4 },
        1400: { items: 5 }
    };

    const [categoriesDataH, setCategoriesDataH] = useState(handymen); // H stands for Handymen
    const [categoriesDataC, setCategoriesDataC] = useState(contractors); // C stands for Contractors
    const [categoriesDataDCF, setCategoriesDataDCF] = useState(designersAndConsultantFirms); // DCF stands for Designers and Consultant Firms

    const [country, setCountry] = useState("Country");
    const [city, setCity] = useState("City");
    const HomeValues = {
        country, city, setCity, setCountry
    }

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
    return (
        <>
            <Navbar page="home" HomeValues={HomeValues}></Navbar>

            {/* Global Search. */}
            <div className='navbar2'>
                <h1 className='navbar2-ulistitem' onClick={() => history.push("/")}>Home</h1>
                <div className='search__parent'>
                    <input
                        className='navbar2-searchbox'
                        type="text"
                        placeholder='Search Category'
                        onChange={(e) => {

                            let updatedDataH = handymen.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });

                            let updatedDataC = contractors.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });

                            let updatedDataDCF = designersAndConsultantFirms.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });


                            if (updatedDataH.length === 0) {
                                setCategoriesDataH([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesDataH(updatedDataH);
                            }

                            if (updatedDataC.length === 0) {
                                setCategoriesDataC([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesDataC(updatedDataC);
                            }

                            if (updatedDataDCF.length === 0) {
                                setCategoriesDataDCF([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesDataDCF(updatedDataDCF);
                            }
                        }}
                    />
                    <SearchIcon className='icon'></SearchIcon>
                </div>
                <h1 className='navbar2-ulistitem'>Help</h1>
            </div>
            {/* Global Search. END */}


            {/* Hero */}
            <Hero></Hero>

            {/* SelectCategory */}
            <div className="selectcategory" id="Handymen">
                <div className='selectcategory-top'>
                    <h1 className='top-title'>Handymen</h1>
                    <div className='top-searchbox'>
                        <div className='search__parent'>
                            <input
                                type="text"
                                placeholder='Search Category'
                                onChange={(e) => {
                                    let updatedData = handymen.filter((val) => {
                                        if (e.target.value === "") {
                                            return val;
                                        }
                                        else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                            return val;
                                        }
                                        return false;
                                    });

                                    if (updatedData.length === 0) {
                                        setCategoriesDataH([{
                                            img: noDataFound,
                                            name: "No Data Found",
                                            subCategories: [
                                                "No Data Found"
                                            ]
                                        }])
                                    }
                                    else {
                                        setCategoriesDataH(updatedData);
                                    }
                                }}
                            />
                            <SearchIcon className='icon'></SearchIcon>
                        </div>
                    </div>
                </div>

                <AliceCarousel
                    disableDotsControls={true}
                    responsive={responsive}
                    items={
                        categoriesDataH.map((val, key) => {
                            return (
                                <div className='selectcategory-bottom' key={key}>

                                    <h3 className='bottom-title'>{val.name}</h3>

                                    <img
                                        onClick={() => {
                                            const searchValues = { user: "Handyman", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "Handyman", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }));
                                        }}
                                        className='bottom-img'
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {
                                            const searchValues = { user: "Handyman", category: val.name, country: country, city: city, subCategory: e.target.value }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "Handyman", category: val.name, country: country, city: city, subCategory: e.target.value }));

                                        }}
                                    >
                                        <option className='dropdown-item' hidden>Select Sub-Category</option>

                                        {val.subCategories.map((item, index) => {
                                            return (
                                                <option key={index} className='dropdown-item' >{item}</option>
                                            )
                                        })}

                                    </select>

                                </div>
                            )
                        })}
                />

            </div>

            <div className='separator'>

            </div>

            {/* ----------------- */}
            <div className="selectcategory" id="Contractors">
                <div className='selectcategory-top'>
                    <h1 className='top-title'>Contractors</h1>
                    <div className='top-searchbox'>
                        <div className='search__parent'>
                            <input
                                type="text"
                                placeholder='Search Category'
                                onChange={(e) => {
                                    let updatedData = contractors.filter((val) => {
                                        if (e.target.value === "") {
                                            return val;
                                        }
                                        else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                            return val;
                                        }
                                        return false;
                                    });

                                    if (updatedData.length === 0) {
                                        setCategoriesDataC([{
                                            img: noDataFound,
                                            name: "No Data Found",
                                            subCategories: [
                                                "No Data Found"
                                            ]
                                        }])
                                    }
                                    else {
                                        setCategoriesDataC(updatedData);
                                    }
                                }}
                            />
                            <SearchIcon className='icon'></SearchIcon>
                        </div>
                    </div>
                </div>

                <AliceCarousel
                    disableDotsControls={true}
                    responsive={responsive}
                    items={
                        categoriesDataC.map((val, key) => {
                            return (
                                <div className='selectcategory-bottom' key={key} >

                                    <h3 className='bottom-title'>{val.name}</h3>

                                    <img
                                        className='bottom-img'
                                        onClick={() => {
                                            const searchValues = { user: "Contractor", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "Contractor", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }));
                                        }}
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {
                                            const searchValues = { user: "Contractor", category: val.name, country: country, city: city, subCategory: e.target.value }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "Contractor", category: val.name, country: country, city: city, subCategory: e.target.value }));
                                        }}
                                    >
                                        <option className='dropdown-item' hidden>Select Sub-Category</option>

                                        {val.subCategories.map((item, index) => {
                                            return (
                                                <option key={index} className='dropdown-item' >{item}</option>
                                            )
                                        })}

                                    </select>

                                </div>
                            )
                        })}
                />

            </div>

            <div className='separator'>
            </div>

            {/* --------------------- */}
            <div className="selectcategory" id="Designers & Consultants">
                <div className='selectcategory-top'>
                    <h1 className='top-title'>Designers & Consultants</h1>
                    <div className='top-searchbox'>
                        <div className='search__parent'>
                            <input
                                type="text"
                                placeholder='Search Category'
                                onChange={(e) => {
                                    let updatedData = designersAndConsultantFirms.filter((val) => {
                                        if (e.target.value === "") {
                                            return val;
                                        }
                                        else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                            return val;
                                        }
                                        return false;
                                    });

                                    if (updatedData.length === 0) {
                                        setCategoriesDataDCF([{
                                            img: noDataFound,
                                            name: "No Data Found",
                                            subCategories: [
                                                "No Data Found"
                                            ]
                                        }])
                                    }
                                    else {
                                        setCategoriesDataDCF(updatedData);
                                    }
                                }}
                            />
                            <SearchIcon className='icon'></SearchIcon>
                        </div>
                    </div>
                </div>

                <AliceCarousel
                    disableDotsControls={true}
                    responsive={responsive}
                    items={
                        categoriesDataDCF.map((val, key) => {
                            return (
                                <div className='selectcategory-bottom' key={key} >

                                    <h3 className='bottom-title'>{val.name}</h3>

                                    <img
                                        onClick={(e) => {
                                            const searchValues = { user: "DesignerConsultantFirm", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "DesignerConsultantFirm", category: val.name, country: country, city: city, subCategory: val.subCategories[0] }));
                                        }
                                        }
                                        className='bottom-img'
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {
                                            const searchValues = { user: "DesignerConsultantFirm", category: val.name, country: country, city: city, subCategory: e.target.value }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            dispatch(fetchUsers({ user: "DesignerConsultantFirm", category: val.name, country: country, city: city, subCategory: e.target.value }));
                                        }}
                                    >
                                        <option className='dropdown-item' hidden>Select Sub-Category</option>

                                        {val.subCategories.map((item, index) => {
                                            return (
                                                <option key={index} className='dropdown-item' >{item}</option>
                                            )
                                        })}

                                    </select>

                                </div>
                            )
                        })}
                />

            </div>
            {/* SelectCategory END */}

            {/* Footer. */}
            <Footer></Footer>
        </>
    );
};

export default NewHomePage;