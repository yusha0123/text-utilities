import React, { useState } from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import languages from "../countries";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Translate(props) {
  const [translateTo, setTranslateTo] = useState("hi");
  const [translateFrom, setTranslateFrom] = useState("en");

  const translateNow = () => {
    if (!props.text) return;
    const text = props.text.trim();
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${translateFrom}&tl=${translateTo}&dt=t&q=${encodeURI(
      text
    )}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        props.setText(json[0].map((item) => item[0]).join(""));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0.5, md: 3 }}
      gap={2}
      my={2}
    >
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <Select
            value={translateFrom}
            onChange={(e) => setTranslateFrom(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.name + " (" + language.native + ")"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <Select
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem key={language.code} value={language.code}>
                {language.name + " (" + language.native + ")"}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        onClick={translateNow}
        endIcon={<TranslateIcon />}
      >
        Translate
      </Button>
    </Stack>
  );
}

export default Translate;
