import React, { useEffect } from "react";
// import styled from "styled-components";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjects, reset } from "../../slices/users";

const SearchProject = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProjects(id));
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  return (
    <>
      <BackToProfile></BackToProfile>
      {projects.data && (
        <Table
          users={projects.data.portfolio}
          title="Projects Completed"
          flag="projects"
          userId={projects.data._id}
        ></Table>
      )}
      ;
    </>
  );
};

export default SearchProject;
