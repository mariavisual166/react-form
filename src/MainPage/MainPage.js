import React from "react";
import Form from "../FormBase/Form";
import Input from "../Input/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function MainPage() {
  const onSubmit = (fields) => {
    console.log(fields);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Input name="field1" label="First Name" required />
        </Grid>
        <Grid item xs={6}>
          <Input name="field2" label="First Name" required />
        </Grid>
        <Button variant="outlined" type="submit">
          submit
        </Button>
      </Grid>
    </Form>
  );
}

export default MainPage;
