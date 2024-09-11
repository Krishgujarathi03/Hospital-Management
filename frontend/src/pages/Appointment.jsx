import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Shriji Hospital"}
        imageUrl={"assets/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
