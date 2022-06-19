import React, { useEffect, useState } from 'react';
import './newHomePage.css';

import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { pakCities, saudiCities } from '../../utils/constants';
import { contractors, handymen, designersAndConsultantFirms } from './categoriesData';

import heroImage from '../../images/HeroImage.jpg';
import noDataFound from '../../images/ndf.jpg';
import logo from '../../images/logo2.png';

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, reset } from "../../slices/users";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";



const NewHomePage = () => {

    const history = useHistory();

    const dispatch = useDispatch();

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


        // eslint-disable-next-line
    }, [isError, isSuccess, message, dispatch]);


    useEffect(() => {

        axios.get('https://api.ipify.org?format=json').then((response) => {

            axios.get(`https://api.ipfind.com/?ip=${response.data.ip}`).then((response) => {
                setCountry(response.data.country);
                setCity(response.data.city);

            })
        })

    }, [isError])

    if (isLoading) {
        return (
            <div className="section-100vh">
                <Spinner />;
            </div>
        );
    }

    return (
        <>

            {/* Navbar1 */}

            <div className='navbar'>
                <Link to='/'>
                    <img className='navbar-logo' src={logo} alt='logo' />
                </Link>
                <div className='navbar-dropdown'>
                    <select onChange={(e) => { setCountry(e.target.value) }}>
                        <option hidden>{country}</option>
                        <option>Pakistan</option>
                        <option>Saudia</option>
                    </select>
                </div>

                <div className='navbar-dropdown'>
                    <select onChange={(e) => { setCity(e.target.value) }}>
                        <option hidden>{city}</option>
                        <option disabled>none</option>
                        {country === "Pakistan"
                            ? pakCities.map((item, index) => (
                                <option key={index}>
                                    {item.label}
                                </option>
                            ))
                            : country === "Saudia" ? saudiCities.map((item, index) => (
                                <option key={index}>
                                    {item.label}
                                </option>
                            )) : null}

                    </select>
                </div>

                <Link to='/Login' >
                    <button className='navbar-btn'>
                        Log in
                    </button>
                </Link>

            </div>

            {/* Navbar1 */}

            {/* Navbar2 */}

            <div className='navbar2'>
                <h1 className='navbar2-ulistitem' onClick={() => history.push("/")}>Home</h1>
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
                <h1 className='navbar2-ulistitem'>Help</h1>
            </div>

            {/* Navbar2 */}


            {/* Hero */}

            <div className="hero">
                <div className='hero-left'>
                    <h1 className='left-ulistitem'>Handyman</h1>
                    <h1 className='left-ulistitem'>Contractor</h1>
                    <h1 className='left-ulistitem'>Designer</h1>
                    <h1 className='left-ulistitem'>Company</h1>
                </div>
                <div className='hero-right'>
                    <div className="right-content">
                        <h2 className="content-title">Everything Is In Your Hands</h2>
                        <p className="content-paragraph">
                            Search the world information including webpages, images,
                            videos and more. Google has many special features to
                            help you find exactly what you use and pay for.
                        </p>
                    </div>
                    <div className="right-img">
                        <img src={heroImage} alt="hero" />
                    </div>
                </div>

            </div>


            {/* Hero */}


            {/* SelectCategory */}

            <div className="selectcategory">
                <div className='selectcategory-top'>
                    <h1 className='top-title'>Handymen</h1>
                    <div className='top-searchbox'>
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
                                        className='bottom-img'
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {

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

            <div className="selectcategory">
                <div className='selectcategory-top'>
                    <h1 className='top-title'>Contractors</h1>
                    <div className='top-searchbox'>
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
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {

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


            <div className="selectcategory">
                <div className='selectcategory-top' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h1 className='top-title'>Designers & Companies</h1>
                    <div className='top-searchbox'>
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
                                        className='bottom-img'
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {

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

            {/* SelectCategory */}


        </>
    );
};

export default NewHomePage;