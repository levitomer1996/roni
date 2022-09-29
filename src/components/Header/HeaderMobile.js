import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import HeaderLog from "./comps/HeaderLog";
import PhoneIcon from "@mui/icons-material/Phone";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function HeaderMobile() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#0b2239", padding: 10 }}
    >
      <Toolbar className="tool_b_mobile" style={{ width: "100%" }}>
        <HeaderLog />
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="tel:+972509721767"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <PhoneIcon style={{ width: 40, height: 40 }} />
          </IconButton>
        </a>
        <SwipeableTemporaryDrawer />
      </Toolbar>
    </AppBar>
  );
}

function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const a_list = [
    { title: "אודות", link: "/about" },
    { title: "תמונות", link: "/gallery" },
    { title: "צור קשר", link: "/contact" },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#0b2239", height: "100%" }}
    >
      <List>
        {a_list.map(({ title, link }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton>
              <a href={link} style={{ textDecoration: "none" }}>
                <p className="a_title">{title}</p>
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          onClick={toggleDrawer("left", true)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon style={{ width: 40, height: 40 }} />
        </IconButton>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
