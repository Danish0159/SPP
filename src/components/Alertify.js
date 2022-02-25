import React from "react";
import { Alert, Slide, Snackbar } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

// const Alertify = ({ open, handleClose, type, message }) => {
const Alertify = ({ type, message }) => {
  return (
    <Snackbar
      // open={open}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={3000}
      // onClose={handleClose}
    >
      {/* <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}> */}
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Alertify;
