import TextField from "@mui/material/TextField";
import * as React from "react";

function Input({ name, label, register, required, errors, type }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        type={type}
        {...register(name, { required })}
      />

      {errors[name] && <span>This field is required</span>}
    </>
  );
}

export default Input;
