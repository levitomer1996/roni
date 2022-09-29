import React from "react";
import { Grid } from "@mui/material";
import "../Header.css";
const AList = () => {
  const list = [
    { title: "אודות", link: "/about" },
    { title: "תמונות", link: "/gallery" },
    { title: "צור קשר", link: "/contact" },
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      {list.map(({ title, link }) => {
        return (
          <Grid item>
            <a class={"list_a"} href={link}>
              {title}
            </a>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AList;
