import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Shriji Hospital is a modern healthcare facility focused on providing
            quality medical services with care and expertise. Our dedicated team
            of professionals works to offer personalized treatment for every
            patient, ensuring their health and well-being are always the top
            priority. At Shriji Hospital, we are here to support you on your
            journey to better health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="assets/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
