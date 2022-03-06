import React from "react";
import { Navbar, Footer } from "../../components";
import { SearchProject } from "../../components/GuestFlow";

const SearchProjectPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <SearchProject></SearchProject>
      <Footer></Footer>
    </main>
  );
};

export default SearchProjectPage;
