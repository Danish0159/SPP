import { createTheme } from "@mui/material";

// Material UI
//Global Styles.
export const theme = createTheme({
    typography: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    },
});

// Material UI
export const styles = {
    textField: {
        fontSize: "1.8rem",
        fontWeight: "400",
        padding: "12px 14px",
        color: "#2a2a2a"
    },
    desciption: {
        fontSize: "1.8rem",
        fontWeight: "400",
        color: "#2a2a2a",
        lineHeight: "1.2",
    },
    select: {
        fontSize: "1.8rem",
        fontWeight: "400",
        color: "#2a2a2a"
    },
    menu: {
        fontSize: "1.5rem",
        fontWeight: "600",
    },
    removeBtn: {
        fontWeight: "600",
        color: "#424d83",
        fontSize: "1.3rem",
        display: "flex",
        alignItems: "center",
    },
    backBtn: {
        color: "#424d83",
        fontSize: "1.6rem",
        fontWeight: "600",
    },
}