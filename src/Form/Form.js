import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input/Input";

function Form({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <Input
        name="Name"
        label="First Name"
        register={register}
        errors={errors}
        required
      />
      {children}

      <input type="submit" />
    </form>
  );
}

export default Form;
