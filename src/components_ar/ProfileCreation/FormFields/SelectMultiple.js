import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import { useController } from "react-hook-form";


function SelectMultiple(props) {

    const {
        field: { onChange, name, value },
        fieldState: { error }
    } = useController({
        name: props.name,
        control: props.control,
        rules: {
            required: true,
        },
        defaultValue: [],
    });

    console.log("select multiple");

    return (
        <>
            <Autocomplete
                multiple
                name={name}
                value={value}
                onChange={(event, item) => {
                    if (item.length <= 3) {
                        onChange(item);
                    }
                }
                }
                options={props.data}
                getOptionLabel={(option) => option.value_ar}
                sx={{
                    '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
                        fontSize: "1.8rem",
                    },
                }}
                ListboxProps={{
                    sx: { fontSize: "1.8rem" },
                }}
                renderInput={params => (
                    <Wrapper>
                        <TextField
                            {...params}
                            helperText={<small className="helper">يسمح بحد أقصى 3 مدن</small>}
                            error={error && true}
                        />
                    </Wrapper>
                )}
            />
            {error && error.type === "required" ? <small className="error">مطلوب</small> : null}
        </>
    );
}

export default SelectMultiple;

const Wrapper = styled.div`
.MuiChip-label,
 .MuiChip-labelMedium,
  .css-6od3lo-MuiChip-label{
  font-size: 1.5rem; 
  }
`