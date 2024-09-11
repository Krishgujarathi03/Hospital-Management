import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyContext from "./context/MyContext";
import axios from "axios";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { url, isAuthenticated, setIsAuthenticated, setAdmin } =
    useContext(MyContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${url}/api/v1/user/admin/me`, {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setAdmin(res.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/doctor/addnew" element={<AddNewDoctor />} />
          <Route path="/admin/addnew" element={<AddNewAdmin />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </>
  );
};

export default App;
