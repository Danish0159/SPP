import React from 'react';
import Carousel from 'react-elastic-carousel';
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

                                <h3 className='bottom-title'>{val.name.value_ar}</h3>

                                <img
                                    onClick={() => {
                                        if (city === "مدينة" && country === "دولة") {
                                            toast.error("يرجى تحديد كل من الدولة والمدينة");
                                        }
                                        else if (city === "مدينة") {
                                            toast.error("يرجى تحديد المدينة أيضًا");
                                        }
                                        else if (country === "دولة") {
                                            toast.error("الرجاء تحديد الدولة");
                                        }
                                        else {
                                            const searchValues = { user: role, category: val.name.value_ar.trim(), country: country, city: city, subCategory: "تصنيف فرعي" }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            const location = { country: country, city: city };
                                            localStorage.setItem("locationAr", JSON.stringify(location));
                                            history.push("/Usersar");
                                        }
                                    }}
                                    className='bottom-img'
                                    src={val.img}
                                    alt=''
                                />

                                <select
                                    className="bottom-dropdown"
                                    onChange={(e) => {
                                        
                                        if (city === "مدينة" && country === "دولة") {
                                            toast.error("يرجى تحديد كل من الدولة والمدينة");
                                        }
                                        else if (city === "مدينة") {
                                            toast.error("يرجى تحديد المدينة أيضًا");
                                        }
                                        else if (country === "دولة") {
                                            toast.error("الرجاء تحديد الدولة");
                                        }
                                        else {
                                        const searchValues = { user: role, category: val.name.value_ar, country: country, city: city, subCategory: e.target.value }
                                        localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                        const location = { country: country, city: city };
                                        localStorage.setItem("locationAr", JSON.stringify(location));
                                        history.push("/Usersar");
                                        }

                                    }}
                                >
                                    <option className='dropdown-item' hidden>حدد فئة فرعية</option>

                                    {val.subCategories.map((item, index) => {
                                        return (
                                            <option key={index} className='dropdown-item' value={item.value_ar}>{item.value_ar}</option>
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

  input[type="text"]::placeholder {  
                  
    font-size: 25px; 
  } 

.selectcategory {
    background-color: white;
    padding: 0px 25px;
    width: 100%;
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
    margin-top: 5px;
    border-radius: 20px;
}

.bottom-img:hover {
    opacity: 0.7;
    transition-duration: 0.6s;
}

.bottom-dropdown {
    width: 200px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    margin: 20px 0px;
    font-size: 18px;
}

.dropdown-item {
    text-align: center;
}

@media screen and (max-width:650px) {
    .bottom-dropdown {
        width: 175px;
        font-size: 1.2rem;
    }
    .bottom-img {
        height: 175px;
        width: 220px;
        border-radius: 20px;

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