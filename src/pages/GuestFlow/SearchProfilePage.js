import React from "react";
import { Navbar, Footer } from "../../components";
import { SearchProfile } from "../../components/GuestFlow";

const SearchProfilePage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProfile></SearchProfile>
      <Footer></Footer>
    </main>
  );
};

export default SearchProfilePage;
