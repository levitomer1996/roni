import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";

import AList from "./comps/AList";
import CallIcon from "./comps/CallIcon";
import HeaderLog from "./comps/HeaderLog";
import "./Header.css";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <>
      <div className="header_root ">
        <AppBar position="static">
          <Container maxWidth="xl" className="cont">
            <Toolbar className="tool_b">
              <HeaderLog />
              <AList />
              <CallIcon />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div className="mobile_header_root">
        <HeaderMobile />
      </div>
    </>
  );
};

export default Header;
