import TextField from "@mui/material/TextField";
import React from "react";
import useStyles from "./Input.styles";

function Input({ name, label, required, type }) {
  const classes = useStyles();

  return (
    <TextField
      name={name}
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      required={required}
      classes={{ root: classes.input }}
    />
  );
}

export default Input;
