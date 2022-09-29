import React from "react";
import "../Header.css";
import logo from "../../../assets/horse-logo.png";
import { Grid } from "@mui/material";
const HeaderLog = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item>
        <a href="/">
          <img src={logo} className="logo" />
        </a>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <p className="logo-title">רוני נטף</p>
          </Grid>
          <Grid item>
            <p className="logo-title_min"> פנסיון סוסים</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderLog;
