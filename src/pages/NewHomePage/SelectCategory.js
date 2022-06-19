import React, { useEffect, useState } from 'react';
import './newHomePage.css';
import noDataFound from '../../images/ndf.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const SelectCategory = ({ title, data }) => {


    const [categoriesData, setCategoriesData] = useState(data);

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1300: { items: 4 },
        1400: { items: 5}
    };



    return (
        <div className="selectcategory">
            <div className='selectcategory-top'>
                <h1 className='top-title'>{title}</h1>
                <div className='top-searchbox'>
                    <input
                        type="text"
                        placeholder='Search Category'
                        onChange={(e) => {

                            let updatedData = data.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }

                            });

                            console.log(updatedData);

                            if (updatedData.length === 0) {
                                setCategoriesData([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesData(updatedData);
                            }
                        }}
                    />
                </div>
            </div>


            <AliceCarousel
                items={
                    categoriesData.map((val, key) => {
                        return (
                            <figure key={key}>
                                <figcaption>{val.name}</figcaption>
                                <img className='carouselimage' src={val.img} alt='' ></img>
                                <figcaption>
                                    <select style={{ width: "200px", padding: "5px", textAlign: "center"}} >
                                        <option hidden>Select Sub-Category</option>
                                        {val.subCategories.map((item, index) => {
                                            return (
                                                <option key={index} style={{ textAlign: "center" }}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </figcaption>
                            </figure>
                        )
                    })} 
                    responsive={responsive} 
                    />

        </div>
    );
};

export default SelectCategory;