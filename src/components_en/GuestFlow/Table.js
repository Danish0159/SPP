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
        {message && <p className="subtitle" style={{ color: "#000000", padding: "1.2rem .8rem" }}> {message}</p>}
        {/* Render Data for Users and else for Projects. */}

        {flag && flag === "users"
          ? renderedData
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((user, index) => {
              return (
                <Link key={index} to={`/Users/${user._id}`}>
                  <div className="search__results">
                    {/* Cell1 */}
                    <div className="search_profile">
                      <Avatar
                        src={user.profilePhoto}
                        sx={{ width: 56, height: 56 }}
                        alt="profile"
                      />
                      <p className="search_name cell">{user.user.name_en}</p>
                    </div>
                    {/* Cell2 */}
                    <p className="cell">
                      {user.location_en.country},&nbsp;
                      {
                        user.location_en.city.map((city, index) => {
                          return (
                            <span key={index}>
                              {city},&nbsp;
                            </span>
                          )
                        })
                      }
                    </p>
                    {/* Cell3 */}
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
                    <p className="cell">{project.location}</p>
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
  min-height: calc(100vh - 100px);
  .search {
    max-width: 110rem;
    width: 100%;
    margin: auto;
  }
  .search__title,
  .subtitle {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: var(--clr-blue-2);
  }

  .search__title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .subtitle {
    font-size: 2rem;
    color: #ffffff;
  }

  .cell {
    font-size: 1.8rem;
    font-weight: 600;
    @media only screen and (max-width: 800px) {
      margin-bottom: 0.2rem;
    }
  }

  .search__columns {
    background-color: var(--clr-blue-2);
    border-radius: 8px;
  }

  .search__results {
    color: var(--clr-black);
  }
  .search__results:nth-child(odd) {
    background-color: #ffffff;
  }
  .search__results:nth-child(even) {
    background-color: var(--clr-white-3);
  }

  .search__results,
  .search__columns {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 5fr 2fr;
    padding: 1.6rem;
  }

  @media only screen and (max-width: 800px) {
    .search__results,
    .search__columns {
      grid-template-columns: 1fr;
    }

    .search__results > * {
      margin-bottom: 0.7rem;
    }
    .search__columns {
      display: none;
    }
  }

  .search_profile {
    display: flex;
    align-items: center;
  }

  .search_name {
    margin-left: 1.4rem;
    margin-right: 1.4rem;
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