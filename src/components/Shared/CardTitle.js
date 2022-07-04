import React from "react";
import { useTranslation } from "react-i18next";

const CardTitle = ({ steps, activeStep }) => {
  const { t } = useTranslation();

  return <h1 className="card__title">{t(steps[activeStep])}</h1>;
};

export default CardTitle;