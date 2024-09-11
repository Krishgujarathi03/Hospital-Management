import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, Navigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const Login = () => {
  const { url, isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${url}/api/v1/user/login`,
        { email, password, confirmPassword, role: "Patient" },
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
    } catch (error) {
      if (error.response) {
        toast.error(error.response?.data?.message);
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
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>

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
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Not Registered Yet?</p>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Register Here
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button style={{ cursor: "pointer" }} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
