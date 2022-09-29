import { Grid } from "@mui/material";
import React from "react";

const PageTitle = ({ title }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent="center"
      alignItems={"center"}
      style={{ padding: 20 }}
    >
      <p style={{ fontSize: "50px" }}>{title}</p>
    </Grid>
  );
};

export default PageTitle;
