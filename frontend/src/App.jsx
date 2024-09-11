import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Appointment from "./pages/Appointment";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import MyContext from "./context/MyContext";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const { url, isAuthenticated, setIsAuthenticated, setUser } =
    useContext(MyContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${url}/api/v1/user/patient/me`, {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(res.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
