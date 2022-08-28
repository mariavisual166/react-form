import React from "react";

function Form() {
  const onSubmit = (e) => {
    const { text } = e.target;
    e.preventDefault();
    console.log(text.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="text" name="text" />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Form;
