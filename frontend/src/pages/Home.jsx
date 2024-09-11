import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero
        title={"Welcome to Shriji Hospital | Your Trusted Healthcare Provider"}
        imageUrl={"assets/hero.png"}
      />
      <Biography imageUrl={"assets/whoweare.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
