
import * as React from "react";

function Input({ name, label, register, required, errors }) {
  return (
    <>
      <label>{label}</label>
      <input {...register(name, { required })} />
      {errors[name] && <span>This field is required</span>}
    </>
  );
}

export default Input;
