import React, { useEffect } from "react";
import styled from "styled-components";
import image from "../../images/13.jpg";
import { FormControl, MenuItem, Select } from "@mui/material";
import { users, categories, countries } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsers, reset } from "../../slices/users";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const Welcome = () => {
  const [user, SetUser] = React.useState("");
  const [category, SetCategory] = React.useState("");
  const [location, SetLocation] = React.useState("");

  // State
  const dispatch = useDispatch();
  const history = useHistory();

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

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);


  function handleSubmit() {
    // Reset Form values.
    SetUser("");
    SetCategory("");
    SetLocation("");

    dispatch(fetchUsers({ user, category, location }));
  }

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  return (
    <Wrapper>
      <h2 className="hero__title">Welcome on Board</h2>
      <p className="hero__subtitle">
        Find Best Contractor Or Designer In <br /> Your Area
      </p>
      <form onSubmit={handleSubmit}>
        <div className="hero__inputs">
          {/* /////////////////////// */}
          {/* Looking For */}
          {/* /////////////////////// */}
          <div className="form-group">
            <label className="label" for="name">
              Looking For
            </label>
            <FormControl>
              <Select
                id="welcome__input"
                value={user}
                onChange={(e) => SetUser(e.target.value)}
                required
              >
                {users.map((user, index) => (
                  <MenuItem id="Select" key={index} value={user.value}>
                    {user.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* /////////////////////// */}
          {/* Category */}
          {/* /////////////////////// */}
          <div className="form-group">
            <label className="label" for="name">
              Category
            </label>
            <FormControl>
              <Select
                id="welcome__input"
                value={category}
                onChange={(e) => SetCategory(e.target.value)}
                required
              >
                {categories.map((item, index) => (
                  <MenuItem id="Select" key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* /////////////////////// */}
          {/* Location */}
          {/* /////////////////////// */}
          <div className="form-group">
            <label className="label" for="name">
              Location
            </label>
            <FormControl>
              <Select
                id="welcome__input"
                value={location}
                onChange={(e) => SetLocation(e.target.value)}
                required
              >
                {countries.map((item, index) => (
                  <MenuItem id="Select" key={index} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <button type="submit" className="blue-btn submit-button">
          Search
        </button>
      </form>
    </Wrapper>
  );
};

export default Welcome;

const Wrapper = styled.header`
  background-image: linear-gradient(
      rgba(39, 39, 39, 0.5),
      rgba(39, 39, 39, 0.5)
    ),
    url(${image});
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 40px);
  background-size: cover;
  max-width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .hero__title {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 3.5rem;
    margin-top: -80px;
    margin-bottom: 1.6rem;
    @media only screen and (max-width: 850px) {
      margin-top: 10px;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  }

  .hero__subtitle {
    font-weight: 600;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5rem;
    @media only screen and (max-width: 850px) {
      font-size: 1.7rem;
      margin-bottom: 2rem;
    }
  }

  .hero__inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 850px) {
      flex-direction: column;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0rem 2rem;
  }

  #welcome__input {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Nunito Sans", sans-serif;
    min-height: auto;
    width: 170px;
    text-align: left;
    padding: 1.4rem 2rem;
    color: black;
    background-color: white;
  }

  .submit-button {
    display: block;
    width: 160px;
    font-weight: 500;
  }

  .label {
    font-size: 1.5rem;
    text-align: left;
    padding: 0.6rem 0.6rem;
  }
`;
