import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are dedicated to delivering exceptional healthcare services with
            a focus on patient well-being and comfort. Our state-of-the-art
            facility is equipped with advanced medical technology, and our team
            of highly skilled doctors, nurses, and staff work together to
            provide personalized care. From routine check-ups to specialized
            treatments, we ensure every patient receives the attention and
            expertise they deserve. At Shriji Hospital, your health is our
            priority, and we strive to create a supportive environment where
            healing and recovery are paramount.
          </p>
          <p>
            At Shriji Hospital, we are committed to continuously improving and
            expanding our facilities to offer top-notch healthcare services.
            With a focus on innovation and patient care, we strive to create a
            modern, comfortable environment equipped with the latest medical
            technology. Our goal is to ensure that every patient receives the
            best possible treatment in a setting that promotes healing and
            well-being.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
