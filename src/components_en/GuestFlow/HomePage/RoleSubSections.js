import React from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const RoleSubSections = ({ id, role, country, city, roleCategories }) => {

    const history = useHistory();

    let breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 568, itemsToShow: 2 },
        { width: 1024, itemsToShow: 3 },
        { width: 1300, itemsToShow: 4 },
        { width: 1400, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    return (
        <Wrapper>
            <div className="selectcategory" id={id}>
                <div className='selectcategory-top'>
                    <h1 className='top-title'>{role}</h1>
                </div>

                <Carousel breakPoints={breakPoints} pagination={false}>
                    {roleCategories.map((val, key) => {
                        return (
                            <div className='selectcategory-bottom' key={key}>

                                <h3 className='bottom-title'>{val.name.value_en}</h3>

                                <img
                                    onClick={() => {
                                        if (city === "City" && country === "Country") {
                                            toast.error("Please Select both Country and City");
                                        }
                                        else if (city === "City") {
                                            toast.error("Please Select the City as well");
                                        }
                                        else if (country === "Country") {
                                            toast.error("Please Select the Country");
                                        }
                                        else {
                                        const searchValues = { user: role, category_en: val.name.value_en, category_ar: val.name.value_ar, country: country, city: city, subCategory: "subCategory" }
                                        localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                        const location = { country: country, city: city };
                                        localStorage.setItem("locationEn", JSON.stringify(location));
                                        history.push("/Users");
                                        }
                                    }}
                                    className='bottom-img'
                                    src={val.img}
                                    alt=''
                                />

                                <select
                                    className="bottom-dropdown"
                                    onChange={(e) => {
                                        if (city === "City" && country === "Country") {
                                            toast.error("Please Select both Country and City");
                                        }
                                        else if (city === "City") {
                                            toast.error("Please Select the City as well");
                                        }
                                        else if (country === "Country") {
                                            toast.error("Please Select the Country");
                                        }
                                        else {
                                        const searchValues = { user: role, category_en: val.name.value_en, category_ar: val.name.value_ar, country: country, city: city, subCategory: e.target.value }
                                        localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                        const location = { country: country, city: city };
                                        localStorage.setItem("locationEn", JSON.stringify(location));
                                        history.push("/Users");
                                        }
                                    }}
                                >
                                    <option className='dropdown-item' hidden>Select Sub-Category</option>

                                    {val.subCategories.map((item, index) => {
                                        return (
                                            <option key={index} className='dropdown-item' value={item.value_en}>{item.value_en}</option>
                                        )
                                    })}

                                </select>

                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </Wrapper>
    )
}

export default RoleSubSections

const Wrapper = styled.div`
.selectcategory {
    background-color: white;
    padding: 0px 25px;
    width: 100%;
    max-width: 150rem;
    margin: auto auto 25px auto;
}

.selectcategory-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 0px;
    margin-bottom: 4rem;
}

.selectcategory-top>* {
    margin: .5rem 0rem;
}

.selectcategory-top .top-title {
    
    font-weight: 800;
    font-size: 4rem;
    color: rgb(51, 50, 50);
    text-align: center;
    margin-right: 1rem
}

.selectcategory-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bottom-title {
    font-size: 2.25rem; 
    font-weight: 600;
    color: grey;
    margin-bottom: 10px;
}

.bottom-img {
    height: 200px;
    width: 240px;
    cursor: pointer;
    margin-bottom: 10px;
    border-radius: 4px;
}

.bottom-img:hover {
    opacity: 0.7;
    border-radius: 20px;
    transition-duration: 0.6s;
}

.bottom-dropdown {
    width: 200px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.4rem;
}

.dropdown-item {
    text-align: center;
    font-size: 1.6rem;
}

@media screen and (max-width:650px) {
    .selectcategory-top {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

@media screen and (max-width:550px) {
    .selectcategory .selectcategory-top .top-title {
        font-size: 3.5rem;
    }
}

.rec.rec-arrow {
    background-color: #424d83;
    color: white;
}

.rec.rec-arrow:disabled {
    visibility: hidden;
}

.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}

`