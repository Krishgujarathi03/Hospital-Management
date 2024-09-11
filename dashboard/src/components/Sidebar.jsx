import React, { useContext, useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const { url, isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${url}/api/v1/user/admin/logout`, {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
    } catch (err) {
      if (err.response) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const navigate = useNavigate();

  const gotoHomePage = () => {
    navigate("/");
    setShow(!show);
  };
  const gotoDoctorsPage = () => {
    navigate("/doctors");
    setShow(!show);
  };
  const gotoMessagesPage = () => {
    navigate("/messages");
    setShow(!show);
  };
  const gotoAddNewDoctor = () => {
    navigate("/doctor/addnew");
    setShow(!show);
  };
  const gotoAddNewAdmin = () => {
    navigate("/admin/addnew");
    setShow(!show);
  };

  return (
    <>
      <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show sidebar" : "sidebar"}
      >
        <div className="links">
          <TiHome onClick={gotoHomePage} />
          <FaUserDoctor onClick={gotoDoctorsPage} />
          <MdAddModerator onClick={gotoAddNewAdmin} />
          <IoPersonAddSharp onClick={gotoAddNewDoctor} />
          <AiFillMessage onClick={gotoMessagesPage} />
          <RiLogoutBoxFill onClick={handleLogout} />
        </div>
      </nav>
      <div
        className="wrapper"
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
      >
        <GiHamburgerMenu
          style={{ cursor: "pointer" }}
          className="hamburger"
          onClick={() => setShow(!show)}
        />
      </div>
    </>
  );
};

export default Sidebar;
