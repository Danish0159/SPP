import React from "react";

const CardTitle = ({ activeStep }) => {
  const steps = [
    "Category",
    "Expertise Level",
    "Employment History",
    "Portfolio",
    "Rate",
    "Location",
    "Phone Number",
    "Profile Photo",
  ];

  return <h1 className="card__title">{steps[activeStep]}</h1>;
};

export default CardTitle;
