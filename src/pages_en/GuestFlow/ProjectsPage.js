import React from "react";
import { Footer } from "../../components_en";
import { Projects } from "../../components_en/GuestFlow";
import { NavbarWelcome } from '../../components_en/Navigations'

const ProjectsPage = () => {
  return (
    <main>
      <NavbarWelcome></NavbarWelcome>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  );
};

export default ProjectsPage;


