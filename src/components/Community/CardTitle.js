import React from "react";

const CardTitle = ({ activeStep }) => {
  const steps = [
    "Personel Info",
    "Your Projects",
    "Preview Profile",
    "Add Project",
  ];

  return <h1 className="card__title">{steps[activeStep]}</h1>;
};

export default CardTitle;
