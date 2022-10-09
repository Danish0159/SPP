import React, { useState } from "react";
import { UploadField } from "../../components_ar/ProfileCreation/FormFields";
import CircularProgress from '@mui/material/CircularProgress';

export default function Photo({ control, setCheck }) {

  const [wait, setWait] = useState(false);

  console.log("photo");

  return (
    <>
      <p className="card__subtitle">يرجى تحميل صورة احترافية تظهر وجهك بوضوح :</p>
      <UploadField
        name="image"
        control={control}
        setCheck={setCheck}
        setWait={setWait}
      />
      {wait && (
        <div style={{ textAlign: "center", width: "100%", marginTop: "1rem" }}>
          <CircularProgress style={{ height: "5rem", width: "5rem" }} />
        </div>
      )}
    </>
  );
};

