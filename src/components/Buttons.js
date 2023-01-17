import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function Buttons(props) {
  const upCase = () => {
    let newText = props.text.toUpperCase();
    props.setText(newText);
  };
  const lowCase = () => {
    let newText = props.text.toLowerCase();
    props.setText(newText);
  };
  const titleCase = () => {
    let newWord = props.text
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    props.setText(newWord);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0.5, md: 3 }}
      mt={2}
      sx={{ flexWrap: "wrap" }}
      gap={2}
    >
      <Button
        variant="contained"
        size="small"
        onClick={upCase}
        endIcon={<ArrowUpwardIcon />}
      >
        Upper Case
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={lowCase}
        endIcon={<ArrowDownwardIcon />}
      >
        Lower Case
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={titleCase}
        endIcon={<KeyboardDoubleArrowUpIcon />}
      >
        Title Case
      </Button>
    </Stack>
  );
}

export default Buttons;
