import React from "react";
import styled from "styled-components";
import { subCategories } from "../../utils/constantsEn";
import { ButtonsWrapper } from "../../Shared/CardLayout";
import { useDispatch } from "react-redux";
import { fetchUsersEn } from "../../features_en/guest/guestSlice";

const Buttons = () => {

  const dispatch = useDispatch();

  const searchValues = JSON.parse(localStorage.getItem("searchValues"));

  return (
    <Wrapper>
      <ButtonsWrapper>
        <h2 className="subcatgories__title">{searchValues.category} SubCategories</h2>
        <button
          className={searchValues.subCategory === "All SubCategories" ? "btn active" : "btn nonActive"}
          onClick={(e) => {
            localStorage.setItem("searchValues", JSON.stringify({ role: searchValues.role, category: searchValues.category, region: searchValues.region, city: searchValues.city, subCategory: "All SubCategories" }));
            dispatch(fetchUsersEn({ role: searchValues.role, category: searchValues.category, region: searchValues.region, city: searchValues.city, subCategory: "All SubCategories"}));
          }}
        >
          All SubCategories
        </button>
        {subCategories[searchValues.role][searchValues.category].map((label, index) => (
          <button
            key={index}
            className={searchValues.subCategory === label.value_en ? "btn active" : "btn nonActive"}
            onClick={(e) => {
              localStorage.setItem("searchValues", JSON.stringify({ role: searchValues.role, category: searchValues.category, region: searchValues.region, city: searchValues.city, subCategory: label.value_en }));
              dispatch(fetchUsersEn({ role: searchValues.role, category: searchValues.category, region: searchValues.region, city: searchValues.city, subCategory: label.value_en }));
            }}
          >
            {label.value_en}
          </button>
        ))}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
  .btn {
    color: white;
    width: 330px;
  }
  .active {
    background-color: #424d83;
  }
  .nonActive {
    background-color: #ffffff;
    border: 1px solid black;
    color: var(--clr-black);
}
 .subcatgories__title {
    
    font-weight: 700;
    color: var(--clr-blue-2);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
  }
`;