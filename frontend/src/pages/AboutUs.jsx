import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Shriji Hospital"}
        imageUrl={"assets/about.png"}
      />
      <Biography imageUrl={"assets/whoweare.png"} />
    </>
  );
};

export default AboutUs;
