import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MyContext from "../context/MyContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { url, isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${url}/api/v1/user/login`,
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigate("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (err.response) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="container form-component">
        <img
          src="/assets/logo1.png"
          alt="logo"
          className="logo"
          style={{ height: "100px", width: "100px", marginBottom: "20px" }}
        />
        <h1 className="form-title">WELCOME TO SHRIJI HOSPITAL</h1>
        <p>Only Admins Are Allowed To Access These Resources!</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button style={{ cursor: "pointer" }} type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
