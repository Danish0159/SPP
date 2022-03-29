import React from "react";
import { Table } from "../GuestFlow";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const { users } = useSelector((state) => state.users);
  console.log(users);
  return <Table users={users.data} title="Search Results" flag="users"></Table>;
};

export default SearchResult;
