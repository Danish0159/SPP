import React from "react";
import { Table } from "../GuestFlow";
import { useSelector } from "react-redux";

const Users = () => {
  const { users } = useSelector((state) => state.users);
  return <Table data={users.data} title="Search Results" flag="users"></Table>;
};

export default Users;