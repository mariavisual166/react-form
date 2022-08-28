import TextField from "@mui/material/TextField";
import React from "react";

function Input({ name, label, required, type }) {
  return (
    <TextField
      name={name}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      required={required}
    />
  );
}

export default Input;
