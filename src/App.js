import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Box } from "@mui/system";

function App() {
  return (
    <>
      <Box sx={{ height: "100vh", width: "100vw" }}>
        <Navbar />
        <Form />
      </Box>
    </>
  );
}

export default App;
