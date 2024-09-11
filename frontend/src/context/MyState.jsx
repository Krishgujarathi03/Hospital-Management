import React, { useState } from "react";
import MyContext from "./MyContext";

const MyState = ({ children }) => {
  const url = "http://localhost:4000";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const contextValue = {
    url,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyState;
