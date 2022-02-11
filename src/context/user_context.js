import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
export const useUserContext = () => {
  return useContext(UserContext);
};
