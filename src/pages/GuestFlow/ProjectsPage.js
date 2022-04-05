import React from "react";
import { Navbar, Footer } from "../../components";
import { Projects } from "../../components/GuestFlow";

const ProjectsPage = () => {
  return (
    <main>
      <Navbar page="welcome"></Navbar>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
};

export default ProjectsPage;
