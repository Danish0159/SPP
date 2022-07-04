import React from "react";
import { Footer } from "../../components";
import { Projects } from "../../components/GuestFlow";
import { NavbarWelcome } from '../../components/Navigations'

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
