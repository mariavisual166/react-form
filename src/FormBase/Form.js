import React from "react";

function Form({ onSubmit, children, reset = true }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      const fields = parsedFields(e);
      onSubmit(fields);

      if (reset) {
        e.target.reset();
      }
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default Form;

export const parsedFields = (e) => {
  const fields = {};

  for (const item of e.target) {
    const { name, value } = item;

    if (name && value) {
      fields[name] = value;
    }
  }
  return fields;
};
