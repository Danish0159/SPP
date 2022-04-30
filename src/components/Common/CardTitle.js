import React from "react";

const CardTitle = ({ steps, activeStep }) => {

  return <h1 className="card__title">{steps[activeStep]}</h1>;
};

export default CardTitle;