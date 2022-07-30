import React, { useEffect, useRef, useState } from "react";
import { Table, Buttons } from "../GuestFlow";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsersEn, reset } from "../../features/guest/guestSlice";
import Spinner from "../Spinner";
import styled from "styled-components";

const Users = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const { users, isLoading, isSuccess, isError } = useSelector(
    (state) => state.guest
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
        history.replace("/");
      }
      else {
        localStorage.setItem("searchValues", JSON.stringify(searchValues));
        dispatch(fetchUsersEn({ user: searchValues.user, category: searchValues.category_en, subCategory: searchValues.subCategory, city: searchValues.city, country: searchValues.country }));
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
    dispatch(fetchUsersEn({ user: searchValues.user, category: searchValues.category_en, country: searchValues.country, city: searchValues.city, subCategory: step }));

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
        <div className="section-100vh">
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
        <Table data={users.data} title="Search Results" flag="users"></Table>
      </Wrapper>
    )
  }
  // If no user exists return message ("No Users Are Registerd In this Category") inside table component.
  return (
    <Wrapper>
      <div className="users__left">
        {searchValues && <Buttons handleStep={handleStep} step={step}></Buttons>}
      </div>
      <Table message="No Users Are Registerd In this Category" title="Search Results" flag={null}></Table>
    </Wrapper>
  )
};

export default Users;

const Wrapper = styled.div`
 min-height: calc(100vh - 100px);
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