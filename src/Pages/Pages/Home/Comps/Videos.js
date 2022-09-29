import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import vid1 from "../../../../assets/Videos/vid1.mp4";
import vid2 from "../../../../assets/Videos/vid2.mp4";
import { Grid } from "@mui/material";
export default function Videos() {
  return (
    <Grid
      container
      flexDirection={"row"}
      justifyContent="center"
      alignItems={"center"}
      spacing={3}
      style={{ width: "100%" }}
    >
      <Grid item>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source src={vid2} type="video/mp4" />
            </video>
          </CardCover>
          <CardContent sx={{ justifyContent: "center", gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              בחווה שלנו
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source src={vid1} type="video/mp4" />
            </video>
          </CardCover>
          <CardContent sx={{ justifyContent: "center", gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              בחווה שלנו
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
