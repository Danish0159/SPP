import React, { useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// Reference Video to integrate react-paginate
// https://www.youtube.com/watch?v=HANSMtDy508&ab_channel=PedroTech

const Table = ({ users = [], title, flag, userId }) => {
  // Displaying only 5 users.
  const [renderedUsers, setRenderedUsers] = useState(users);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(renderedUsers.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Wrapper>
      <div className="search">
        <h2 className="search__title">{title}</h2>

        <div className="search__columns">
          <p className="subtitle g1">Name</p>
          <p className="subtitle g2">Location</p>
          <p className="subtitle g3">Rating</p>
        </div>

        {/* Render Data for Users and for Projects. */}
        {flag === "users"
          ? renderedUsers
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user, index) => {
                return (
                  <Link to={`/Users/${user._id}`}>
                    <div key={index} className="search__results">
                      {/* <p className="cell g1">{user.name}</p> */}
                      {/* <p className="cell g2">{user.price}</p> */}
                      {/* <p className="cell g3">{user.image}</p> */}
                      <img src={user.profilePhoto} className="cell g3 test">
                        {/* {user.image} */}
                      </img>
                    </div>
                  </Link>
                );
              })
          : renderedUsers
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user, index) => {
                return (
                  <Link to={`/Projects/${userId}/${user._id}`}>
                    <div key={index} className="search__results">
                      <p className="cell g1">{user.projectName}</p>
                      <p className="cell g2">{user.location}</p>
                      {/* <p className="cell g3">{user.image}</p> */}
                      <img src={user.images[0]} className="cell g3 test">
                        {/* {user.image} */}
                      </img>
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
  padding: 2rem 2rem;

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

  .search {
    max-width: 110rem;
    width: 100%;
    margin: auto;
  }

  .cell {
    font-size: 1.7rem;
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

    .search__columns {
      /* display: none; */
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
  .test {
    width: 70px;
  }
`;
