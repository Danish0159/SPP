import React, { useEffect, useRef, useState } from "react";
import { Table, Buttons } from "../GuestFlow";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsersAr, reset } from "../../features_ar/guest/guestSlice";
import Spinner from "../Spinner";
import styled from "styled-components";

const Users = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { users, isLoading, isSuccess, isError } = useSelector(
    (state) => state.guestAr
  );

  const searchValues = JSON.parse(localStorage.getItem("searchValues"));

  const [step, setStep] = useState(searchValues?.subCategory);
  const handleStep = (id) => {
    setStep(id);
  }

  // If User refreshes page(For persistent).
  useEffect(() => {
    if (!users) {
      // Someone new paste the url in the seaarch bar.
      if (!searchValues) {
        history.replace("/ar");
      }
      else {
        localStorage.setItem("searchValues", JSON.stringify(searchValues));
        dispatch(fetchUsersAr({ user: searchValues.user, category: searchValues.category, subCategory: searchValues.subCategory, city: searchValues.city, country: searchValues.country }));
      }
    }
    // eslint-disable-next-line
  }, [])

  // If User changes subCategory. (But Prevent on first render.)
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch(fetchUsersAr({ user: searchValues.user, category: searchValues.category, country: searchValues.country, city: searchValues.city, subCategory: step }));

    // eslint-disable-next-line
  }, [step])

  useEffect(() => {
    if (isError) {
      dispatch(reset());
    }
    if (isSuccess) {
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isSuccess, isError]);

  if (isLoading) {
    return (
      <Wrapper>
        <div className="users__left">
          <Buttons handleStep={handleStep} step={step}></Buttons>
        </div>
        <div className="section-50vh-1200w">
          <Spinner />;
        </div>
      </Wrapper>
    );
  }
  if (users) {
    return (
      <Wrapper>
        <div className="users__left">
          <Buttons handleStep={handleStep} step={step}></Buttons>
        </div>
        <Table data={users.data} title="نتائج البحث" flag="users"></Table>
      </Wrapper>
    )
  }
  // If no user exists return message ("No Users Are Registerd In this Category") inside table component.
  return (
    <Wrapper>
      <div className="users__left">
        {searchValues && <Buttons handleStep={handleStep} step={step}></Buttons>}
      </div>
      <Table message= "لم يتم تسجيل أي مستخدم في هذه الفئة الفرعية" title="نتائج البحث" flag={null}></Table>
    </Wrapper>
  )
};

export default Users;

const Wrapper = styled.div`
 padding: 3rem 2rem;
 display:grid;
 grid-template-columns: 1fr 2fr;
 max-width: 140rem;
 width: 100%;
 margin: auto;
 @media only screen and (max-width: 1200px) {
 grid-template-columns: 1fr;
 }
`;