import React, { useEffect } from "react";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjects, reset } from "../../slices/users";

const Projects = () => {
  const dispatch = useDispatch();

  //State.
  const { projects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProjects(id));
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  if (projects.data) {
    return (
      <>
        <BackToProfile
          avatar={projects.data.projects.profilePhoto}
          name={projects.data.projects.user.name}
          role={projects.data.projects.user.role}
          userId={projects.data.projects._id}
        ></BackToProfile>
        <Table
          data={projects.data.projects.portfolio}
          title="Projects Completed"
          flag="projects"
          userId={projects.data.projects._id}
        ></Table>
      </>
    );
  }
  return null;
};
export default Projects;