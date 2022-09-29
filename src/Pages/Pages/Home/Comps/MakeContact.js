import React from "react";
import BootstrapInput from "../../../../components/Bootstrap/BootstrapInput";
import Button from "react-bootstrap/Button";
import { Grid } from "@mui/material";
import "../Home.css";
const MakeContact = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent="center"
      alignItems="center"
      spacing={1}
      className="makecontact_cont"
      style={{ width: "100%" }}
    >
      <Grid item>
        <p className="makecontact_para">
          לא מתאים לכם להתקשר אלינו? השאירו מספר טלפון ושם מלא ונחזור אליכם!
        </p>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <BootstrapInput type={"phone"} placeholder={"מספר טלפון"} />
          </Grid>
          <Grid item>
            <BootstrapInput type={"text"} placeholder={"שם מלא"} />
          </Grid>{" "}
        </Grid>
      </Grid>

      <Grid item>
        <Button variant="warning">חזרו אליי</Button>
      </Grid>
    </Grid>
  );
};

export default MakeContact;
