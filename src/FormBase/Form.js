import React from "react";

function Form({ onSubmit, children, reset = true }) {
  const handleSubmit = (e) => {
    if (onSubmit) {
      e.preventDefault();
      onSubmit(e.target);

      if (reset) {
        e.target.reset();
      }
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default Form;
