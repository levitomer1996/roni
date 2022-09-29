import React from "react";
import Parallax from "./Comps/Parallax";
import { Grid } from "@mui/material";
import Videos from "./Comps/Videos";
import Margin from "../../../components/Margin";
import MakeContact from "./Comps/MakeContact";

const Home = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item style={{ width: "100%" }}>
        <Parallax />
      </Grid>
      <Margin bottom={20} />
      <Grid item style={{ width: "100%" }}>
        <div className="about_cont">
          <p className="about_para">
            הפנסיון נמצא במשק המשפחתי שלנו בישוב בית נחמיה. הוא מנוהל על ידי
            רוני נטף שמטפלת בסוסים על בסיס יומי!
          </p>
          <Videos />
        </div>
      </Grid>
      <Margin bottom={20} />
      <Grid item style={{ width: "100%" }}>
        <MakeContact />
      </Grid>
      <Margin bottom={20} />
    </Grid>
  );
};

export default Home;
