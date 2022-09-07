import React, { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Avatar, Rating } from "@mui/material";

const Table = ({ data = [], title, flag, userId, message }) => {

  const [renderedData] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(renderedData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const location = JSON.parse(localStorage.getItem("locationEn"));

  return (
    <Wrapper>
      <div className={flag === "projects" ? "search" : ""}>
        <h2 className="search__title">{title}</h2>
        <div className="search__columns">
          <p className="subtitle">Name</p>
          <p className="subtitle">Location</p>
          <p className="subtitle">Rating</p>
        </div>

        {/* Return message on Users page if no user exists. */}
        {message && <p className="subtitle" style={{ color: "#000000", padding: "1.2rem .8rem", textAlign: "center" }}> {message}</p>}
        {/* Render Data for Users and else for Projects. */}

        {flag && flag === "users"
          ? renderedData
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((user, index) => {
              return (
                <Link key={index} to={`/Users/${user._id}`}>
                  <div className="search__results">
                    <p className="cell" id="special">
                      <Avatar
                        src={user.profilePhoto}
                        sx={{ width: 56, height: 56, border: "1px solid blue", marginRight: "1rem" }}
                        alt="profile"
                      />
                      {user.about_en.companyName}
                    </p>
                    <p className="cell">
                      {user.location_en.country},&nbsp;
                      {
                        user.location_en.city.find((city) => city === location.city && city)
                      }
                    </p>
                    <p className="cell">
                      <Rating precision={0.5} name="read-only" value={user.stars} style={{ fontSize: "1.9rem" }} readOnly />
                    </p>
                  </div>
                </Link>
              );
            })
          : renderedData
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((project, index) => {
              return (
                <Link key={index} to={`/Projects/${userId}/${project._id}`}>
                  <div className="search__results">
                    <p className="cell">{project.projectName}</p>
                    <p className="cell">{project.projectLocation}</p>
                    <p className="cell">
                      <Rating precision={0.5} name="read-only" value={project.noOfStars} style={{ fontSize: "1.9rem" }} readOnly />
                    </p>
                  </div>
                </Link>
              );
            })}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </Wrapper>
  );
};

export default Table;
const Wrapper = styled.section`
  .search {
    max-width: 110rem;
    width: 100%;
    margin: auto;
  }

  .search__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--clr-blue-2);
    margin-bottom: 3rem;
  }

  .subtitle {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    padding: 1.6rem;
  }

  .search__results,
  .search__columns {
    display: grid;
    text-align: center;
    grid-template-columns: 3fr 3fr 3fr;
  }

  .search__columns {
    background-color: var(--clr-blue-2);
    border-radius: 8px;
  }

  .search__results {
    border-bottom: 1px solid black;
    border-radius: 5px;
  }

  .cell {
    font-size: 1.8rem;
    font-weight: 600;
    padding: 1.5rem;
  }


  #special {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1200px) {
    .search__title {
      text-align: center;
      margin: 1rem 0rem;
    } 
  }

  @media only screen and (max-width: 800px) {
    .search__results,
    .search__columns {
      grid-template-columns: 1fr;
    } 

    .search__columns {
      display: none;
    }

    .search__results {
      padding: 1rem 0rem;
    }

    .cell {
      padding: 0.5rem 0rem;
    }

  }

  .paginationBttns {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0rem;
  }

  .paginationBttns a {
    font-size: 1.2rem;
    padding: 10px 15px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid var(--clr-blue-1);
    color: #2b2eff;
    cursor: pointer;
    @media only screen and (max-width: 800px) {
      font-size: 1.2rem;
      padding: 5px 8px;
      margin: 3px;
    }
  }

  .paginationBttns a:hover {
    color: white;
    background-color: var(--clr-blue-1);
  }

  .paginationActive a {
    color: white;
    background-color: var(--clr-blue-1);
  }

  .paginationDisabled a {
    color: white;
    background-color: #dddddd;
    border: 1px solid #dddddd;
  }

  .paginationDisabled a:hover {
    background-color: #dddddd;
  }
`;

// Reference Video to integrate react-paginate
// https://www.youtube.com/watch?v=HANSMtDy508&ab_channel=PedroTech