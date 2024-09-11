import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MyContext from "../context/MyContext";

const AddNewDoctor = () => {
  const { url, isAuthenticated, setIsAuthenticated } = useContext(MyContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      const res = await axios.post(
        `${url}/api/v1/user/doctor/addnew`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setPassword("");
    } catch (err) {
      if (err.response) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="page">
        <section className="container add-doctor-form">
          <img
            src="/assets/logo1.png"
            alt="logo"
            className="logo"
            style={{ height: "100px", width: "100px", marginBottom: "20px" }}
          />
          <h1 className="form-title">REGISTER A NEW DOCTOR</h1>
          <form onSubmit={handleAddNewDoctor}>
            <div className="first-wrapper">
              <div>
                <img
                  src={
                    docAvatarPreview
                      ? `${docAvatarPreview}`
                      : "/assets/docHolder.jpg"
                  }
                  alt="Doctor Avatar"
                />
                <input type="file" onChange={handleAvatar} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <input
                  type={"date"}
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <select
                  value={doctorDepartment}
                  onChange={(e) => {
                    setDoctorDepartment(e.target.value);
                  }}
                >
                  <option value="">Select Department</option>
                  {departmentsArray.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <button type="submit" style={{ cursor: "pointer" }}>
                  Register New Doctor
                </button>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddNewDoctor;
