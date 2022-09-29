import { Grid } from "@mui/material";
import React from "react";
import PageTitle from "../../../components/Title/PageTitle";
import PhotosContainer from "./Comps/PhotosContainer";

import "./Gallery.css";
const Gallery = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      justifyContent="center"
    >
      <PageTitle title={"תמונות"} />

      <PhotosContainer />
    </Grid>
  );
};

export default Gallery;
