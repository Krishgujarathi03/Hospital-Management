import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import MyContext from "../context/MyContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { url, isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${url}/api/v1/user/patient/logout`, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <Link to={"/"} onClick={() => setShow(!show)}>
            <img src="assets/logo1.png" alt="logo" className="logo-img" />
          </Link>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button
              style={{ cursor: "pointer" }}
              className="logoutBtn btn"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <button
              style={{ cursor: "pointer" }}
              className="loginBtn btn"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
          )}
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="hamburger"
          onClick={() => setShow(!show)}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
