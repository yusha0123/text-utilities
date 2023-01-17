import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextFieldsIcon from "@mui/icons-material/TextFields";

export default function Navbar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <TextFieldsIcon /> Text - Utilities
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
