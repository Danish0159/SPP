import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Select, MenuItem } from "@mui/material";
import { useController } from "react-hook-form";
import { styles } from "../../../Shared/Styles";

function SelectFieldSetConditional(props) {

    const {
        field: { onChange, name, value },
        fieldState: { error }
    } = useController({
        name: props.name,
        control: props.control,
        rules: {
            required: true
        },
        defaultValue: ""
    });

const dispatch = useDispatch();

function updateState() {
    dispatch(props.updateConditionalFlag(value));
}

useEffect(() => {
    if (value) {
        updateState();
    }
    // eslint-disable-next-line
}, [value]);

console.log("select field conditional");

return (
    <>
        <Select
            fullWidth
            name={name}
            value={value}
            onChange={onChange}
            style={styles.select}
            error={error && true}
        >
            {props.data && props.data.map((item, index) => (
                <MenuItem sx={styles.menu} key={index} value={item.value_ar}>
                    {item.value_ar}
                </MenuItem>
            ))}
        </Select>
        {error && error.type === "required" ? <small className="error">مطلوب</small> : null}
    </>
)
};

export default SelectFieldSetConditional;