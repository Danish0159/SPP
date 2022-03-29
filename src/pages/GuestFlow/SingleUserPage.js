import React from "react";
import { Navbar, Footer } from "../../components";
import { SingleUser } from "../../components/GuestFlow";

const SearchProfilePage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SingleUser></SingleUser>
      <Footer></Footer>
    </main>
  );
};

export default SearchProfilePage;
