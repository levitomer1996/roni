import React from "react";
import Button from "@mui/joy/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import { Grid, IconButton } from "@mui/material";
const CallIcon = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="tel:+972509721767"
        >
          <IconButton>
            <PhoneIcon
              style={{ width: "50px", height: "50px", color: "white" }}
            />
          </IconButton>
        </a>
      </Grid>
      <Grid item>
        <p> התקשרו עכשיו 050-9721767</p>
      </Grid>
    </Grid>
  );
};

export default CallIcon;
