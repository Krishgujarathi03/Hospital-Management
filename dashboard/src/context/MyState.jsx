import React, { useState } from "react";
import MyContext from "./MyContext";

const MyState = ({ children }) => {
  const url = "http://localhost:4000";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});

  const contextValue = {
    url,
    isAuthenticated,
    setIsAuthenticated,
    admin,
    setAdmin,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyState;
