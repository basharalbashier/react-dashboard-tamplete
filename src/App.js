import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scence/global/Topbar";
import Sidebar_ from "./scence/global/Sidebar";
// import Dashboard from "./scence/dashboard"
// import Team from "./scence/team";
// import Invoices from "./scence/invoices";
// import Contacts from "./scence/contacts";
// import Bar from "./scence/bar";
// import Form from "./scence/form";
// import Line from "./scence/line";
// import Pie from "./scence/pie";
// import FAQ from "./scence/faq";
// import Geography from "./scence/geography";
// import Calendar from "./scence/calendar";
import { Box } from "@mui/material";

import { Routes } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <div className="app"> */}
        <main className="content">
          <Box
            flexDirection={"row"}
            display="flex"
          >
            <Box display="flex">
              <Sidebar_ />
            </Box>
            <Box sx={{ ml: 1, flex:1}} >
              <Topbar />
              {/* <Routes>
                {/* <Route path="/" element={<Dashboard/>}/> */}
                {/* <Route path="/team" element={<Team/>}/> */}
                {/* <Route path="/invoices" element={<Invoices/>}/> */}
                {/* <Route path="/contacts" element={<Contacts/>}/> */}
                {/* <Route path="/bar" element={<Bar/>}/> */}
                {/* <Route path="/form" element={<Form/>}/> */}
                {/* <Route path="/line" element={<Line/>}/> */}
                {/* <Route path="/pie" element={<Pie/>}/> */}
                {/* <Route path="/faq" element={<FAQ/>}/> */}
                {/* <Route path="/geography" element={<Geography/>}/> */}
                {/* <Route path="/calendar" element={<Calendar/>}/> */}
            </Box>
          </Box>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
