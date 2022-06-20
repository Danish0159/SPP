import React, { useEffect } from "react";
import { Table } from "../GuestFlow";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsers, reset } from "../../slices/users";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchValues = JSON.parse(localStorage.getItem("searchValues"));
  const { users, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (!users) {
      if (!searchValues) {
        history.replace("/HomePage");
      }
      else {
        dispatch(fetchUsers(searchValues));
      }
    }
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  if (users) {
    return <Table data={users.data} title="Search Results" flag="users"></Table>;
  }
  else {
    return null;
  }
};

export default Users;