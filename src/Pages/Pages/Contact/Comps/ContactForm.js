import React from "react";
import "../Contact.css";

import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import BootstrapInput from "../../../../components/Bootstrap/BootstrapInput";
import Margin from "../../../../components/Margin";

const ContactForm = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      style={{ width: "100%" }}
    >
      <Grid item>
        <Margin top={10} />
      </Grid>
      <Grid item className="grid_i">
        <BootstrapInput placeholder={"שם מלא"} />
      </Grid>
      <Grid item className="grid_i">
        <BootstrapInput placeholder={"כתובת מייל"} />
      </Grid>
      <Grid item className="grid_i">
        <BootstrapInput placeholder={"מספר טלפון"} />
      </Grid>
      <Grid item className="grid_i_btn">
        <BootstrapInput placeholder={"הודעה"} rows={8} multiline />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          style={{ backgroundColor: "rgb(11, 34, 57)" }}
        >
          שלח
        </Button>
      </Grid>
      <Grid item>
        <Margin />
      </Grid>
    </Grid>
  );
};

export default ContactForm;
