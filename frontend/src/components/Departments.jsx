import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "assets/Department/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "assets/Department/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "assets/Department/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "assets/Department/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "assets/Department/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "assets/Department/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "assets/Department/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "assets/Department/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "assets/Department/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((item, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{item.name}</div>
                <img src={item.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
