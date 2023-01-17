import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import languages from "../countries";

function Translate(props) {
  useEffect(() => {
    const selectTag = document.querySelectorAll("select");
    selectTag.forEach((tag, id) => {
      languages.forEach((language) => {
        let selected =
          id === 0
            ? language.code === "en"
              ? "selected"
              : ""
            : language.code === "hi"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${language.code}" >${
          language.name + " (" + language.native + ")"
        }</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      });
    });
  }, []);
  const translateNow = () => {
    if (!props.text) return;
    const text = props.text.trim();
    const from = document.getElementById("translateFrom").value;
    const to = document.getElementById("translateTo").value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(
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
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 0.5, md: 3 }}
      mt="10vh"
      sx={{ flexWrap: "wrap" }}
      gap={2}
    >
      <Box sx={{ minWidth: 150 }}>
        <select id="translateFrom"></select>
      </Box>
      <Box sx={{ minWidth: 150 }}>
        <select id="translateTo"></select>
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
