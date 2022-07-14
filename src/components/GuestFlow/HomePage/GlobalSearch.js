import React from 'react'
import { Contractors, Handymen, Designers, Consultants } from './categoriesData';
import SearchIcon from '@mui/icons-material/Search';
import noDataFound from '../../../images/ndf.jpg';
import styled from 'styled-components';


const GlobalSearch = ({ setCategoriesDataH, setCategoriesDataC, setCategoriesDataD, setCategoriesDataCF }) => {
    return (
        <Wrapper>
            <div className='navbar2'>
                <h1 className='navbar2-ulistitem'>Home</h1>
                <div className='search__parent'>
                    <input
                        className='navbar2-searchbox'
                        type="text"
                        placeholder='Search Category'
                        onChange={(e) => {

                            let updatedDataH = Handymen.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });

                            let updatedDataC = Contractors.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });

                            let updatedDataD = Designers.filter((val) => {
                                if (e.target.value === "") {
                                    return val;
                                }
                                else if (e.target.value.length === 1 ? val.name.toLowerCase().startsWith(e.target.value.toLowerCase()) : val.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                                    return val;
                                }
                                return false;
                            });

                            let updatedDataCF = Consultants.filter((val) => {
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

                            if (updatedDataD.length === 0) {
                                setCategoriesDataD([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesDataD(updatedDataD);
                            }

                            if (updatedDataCF.length === 0) {
                                setCategoriesDataCF([{
                                    img: noDataFound,
                                    name: "No Data Found",
                                    subCategories: [
                                        "No Data Found"
                                    ]
                                }])
                            }
                            else {
                                setCategoriesDataCF(updatedDataCF);
                            }
                        }}
                    />
                    <SearchIcon className='icon'></SearchIcon>
                </div>
                <h1 className='navbar2-ulistitem'>Help</h1>
            </div>
        </Wrapper>
    )
}

export default GlobalSearch

const Wrapper = styled.div`
.navbar2 {
    max-width: 140rem;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: 1.5rem;
    background-color: white;
}

.navbar2-ulistitem:first-child {
    color: #424d83;
}

.navbar2-ulistitem:last-child {
    border-left: 1px solid rgb(122, 121, 121);
    padding-left: 20px;
}

.navbar2-ulistitem {
    margin: 20px 0px;
    color: rgb(122, 121, 121);
    cursor: pointer;
}

.navbar2 input {
    font-size: 1.6rem;
    padding: 12px 2rem;
    padding-right: 14rem;
    border: none;
    color:rgb(120, 116, 116); 
    border-radius: 25px;
    transition: all 0.2s;
    border: 1.4px solid #c0bdbd;
    font-weight: 600;
}

.navbar2 input:focus{
    outline:none;
}

@media screen and (max-width:650px) {
    .navbar2 {
        font-size: 1.15rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        
    }
    .navbar2 input { 
            padding-right: 2rem;
     }

}
.search__parent {
    display: flex;
    align-items: center;
}
.icon {
    color: rgb(120, 116, 116);
    transform: scale(1.7);
    margin-left: -3.13rem;
}
`;