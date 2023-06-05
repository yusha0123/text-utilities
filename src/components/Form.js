import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Buttons from "./Buttons";
import Swal from "sweetalert2";
import Translate from "./Translate";

export default function Form() {
  const [text, setText] = React.useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const createTextFile = () => {
    if (text.trim().length === 0) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "error",
        title: "Input Field is Empty !",
      });
      return;
    }
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Text-Utlities";
    link.href = fileUrl;
    link.click();
  };
  const wordCount = (word) => {
    return word.split(" ").filter(function (n) {
      // eslint-disable-next-line
      return n != "";
    }).length;
  };
  return (
    <Stack direction="column" alignItems="center" gap={2} marginY={5}>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Enter Text Here:"
          multiline
          rows={4}
          sx={{ width: { xs: "90vw", sm: "85vw", md: "80vw", lg: "60vw" } }}
          value={text}
          spellCheck="false"
          onChange={handleOnChange}
        />
      </Box>
      <Stack direction="row" gap={"30vw"}>
        <b>Characters : {text.length}</b>
        <b>Words : {wordCount(text)}</b>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        alignItems="center"
      >
        <Tooltip title="Download Text File" placement="top">
          <IconButton onClick={createTextFile}>
            <GetAppRoundedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy Text" placement="top">
          <IconButton onClick={() => navigator.clipboard.writeText(text)}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear Text" placement="top">
          <IconButton onClick={() => setText("")}>
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      <Buttons text={text} setText={setText} />
      <Translate text={text} setText={setText} />
    </Stack>
  );
}
