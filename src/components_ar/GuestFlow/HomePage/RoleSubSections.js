import React from 'react'
import noDataFound from '../../../images/ndf.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchUsersAr } from "../../../features/guest/guestSlice";
import styled from 'styled-components';

const RoleSubSections = ({ id, role_en, role_ar, roleData, country, city, roleCategories, roleCategoriesUpdate }) => {
    const dispatch = useDispatch();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1300: { items: 4 },
        1400: { items: 5 }
    };

    return (
        <Wrapper>
            <div className="selectcategory" id={id}>
                <div className='selectcategory-top'>
                    <h1 className='top-title'>{role_ar}</h1>
                    <div className='top-searchbox'>
                        <div className='search__parent'>
                            <input
                                type="text"
                                placeholder='فئة البحث'
                                onChange={(e) => {
                                    let updatedData = roleData.filter((val) => {
                                        if (e.target.value === "") {
                                            return val;
                                        }
                                        else if (e.target.value.length === 1 ? val.name.value_ar.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.value_ar.toLowerCase().includes(e.target.value.toLowerCase())) {
                                            return val;
                                        }
                                        return false;
                                    });

                                    if (updatedData.length === 0) {
                                        roleCategoriesUpdate([{
                                            img: noDataFound,
                                            name: {
                                                value_ar: "لاتوجد بيانات",
                                                value_en: "لاتوجد بيانات"
                                            },
                                            subCategories: [
                                                {
                                                    value_ar: "لاتوجد بيانات",
                                                    value_en: "لاتوجد بيانات"
                                                }
                                            ]
                                        }])
                                    }
                                    else {
                                        roleCategoriesUpdate(updatedData);
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
                        roleCategories.map((val, key) => {
                            return (
                                <div className='selectcategory-bottom' key={key}>

                                    <h3 className='bottom-title'>{val.name.value_ar}</h3>

                                    <img
                                        onClick={() => {
                                            const searchValues = { user: role_en, category_en: val.name.value_en, category_ar: val.name.value_ar, country: country, city: city, subCategory: val.subCategories[0].value_en }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            const location = { country: country, city: city };
                                            localStorage.setItem("locationAr", JSON.stringify(location));
                                            dispatch(fetchUsersAr({ user: role_en, category: val.name.value_en, country: country, city: city, subCategory: val.subCategories[0].value_en }));

                                        }}
                                        className='bottom-img'
                                        src={val.img}
                                        alt=''
                                    />

                                    <select
                                        className="bottom-dropdown"
                                        onChange={(e) => {
                                            const searchValues = { user: role_en, category_en: val.name.value_en, category_ar: val.name.value_ar, country: country, city: city, subCategory: e.target.value }
                                            localStorage.setItem("searchValues", JSON.stringify(searchValues));
                                            const location = { country: country, city: city };
                                            localStorage.setItem("locationAr", JSON.stringify(location));
                                            dispatch(fetchUsersAr({ user: role_en, category: val.name.value_en, country: country, city: city, subCategory: e.target.value }));

                                        }}
                                    >
                                        <option className='dropdown-item' hidden>حدد فئة فرعية</option>

                                        {val.subCategories.map((item, index) => {
                                            return (
                                                <option key={index} className='dropdown-item' value={item.value_en}>{item.value_ar}</option>
                                            )
                                        })}

                                    </select>

                                </div>
                            )
                        })}
                />

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
    margin: auto;
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
    font-family: "Roboto", sans-serif;
    font-weight: 800;
    font-size: 4rem;
    color: rgb(51, 50, 50);
    text-align: center;
    margin-right: 1rem
}

.selectcategory-top .top-searchbox input {
    font-size: 1.6rem;
    padding: 12px 2rem;
    border: none;
    color: rgb(120, 116, 116);
    border-radius: 25px;
    transition: all 0.2s;
    border: 1.4px solid #c0bdbd;
    font-weight: 600;
}

.selectcategory-top .top-searchbox input:focus {
    outline: none;
}

@media screen and (max-width:650px) {
    .selectcategory-top .top-searchbox input {
        padding-right: 2rem;
    }
}

.selectcategory-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bottom-title {
    font-size: 2.25rem;
    font-family: "Roboto", sans-serif;
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
    font-size: 18px;
}

.dropdown-item {
    text-align: center;
}

.alice-carousel__prev-btn {
    font-size: 4rem;
}

.alice-carousel__next-btn {
    font-size: 4rem;
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
.search__parent {
    display: flex;
    align-items: center;
}

.icon {
    color: rgb(120, 116, 116);
    transform: scale(1.7);
    margin-right: -3.13rem;
}
`