import { Grid } from "@mui/material";
import React from "react";
import BootstrapInput from "../../../components/Bootstrap/BootstrapInput";
import Margin from "../../../components/Margin";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";
import ContactForm from "./Comps/ContactForm";
const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
