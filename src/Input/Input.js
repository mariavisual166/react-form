import * as React from "react";
import makeStyles from "./Input.styles";

function Input({ name, label, register, required, errors }) {
  const classes = makeStyles();
  return (
    <>
      <label>{label}</label>
      <input className={classes.input} {...register(name, { required })} />
      {errors[name] && <span>This field is required</span>}
    </>
  );
}

export default Input;
