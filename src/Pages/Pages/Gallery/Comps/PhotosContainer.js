import React, { useState } from "react";
import { Grid } from "@mui/material";
import horse1 from "../../../../assets/HorsesPhotos/IMG_1911.jpg";
import horse2 from "../../../../assets/HorsesPhotos/IMG_1913.jpg";
import horse3 from "../../../../assets/HorsesPhotos/IMG_1915.jpg";
import horse4 from "../../../../assets/HorsesPhotos/IMG_1916.jpg";
import horse5 from "../../../../assets/HorsesPhotos/IMG_1928.jpg";
import horse6 from "../../../../assets/HorsesPhotos/IMG_1930.jpg";

import "../Gallery.css";
import PhotoModal from "./PhotoModal";
const PhotosContainer = () => {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);

  const list = [horse1, horse2, horse3, horse4, horse5, horse6];

  const handlePress = (p) => {
    open ? setOpen(false) : setOpen(true);
    setPhoto(p);
  };
  return (
    <Grid container spacing={2} style={{ width: "70%" }}>
      {list.map((img) => {
        return (
          <Grid item key={img}>
            <img
              src={img}
              className="gallery_img"
              onClick={() => {
                handlePress(img);
              }}
            />
          </Grid>
        );
      })}
      <Grid item>
        <PhotoModal
          open={open}
          handleClose={() => setOpen(false)}
          photo={photo}
        />
      </Grid>
    </Grid>
  );
};

export default PhotosContainer;
