import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import SideBar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar mode={mode} />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <SideBar mode={mode} setMode={setMode} />
          <Feed mode={mode} setMode={setMode}/>
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
