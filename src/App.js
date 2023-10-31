import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./main/global/Topbar";
import Sidebar_ from "./main/global/Sidebar";
import { useState } from "react";

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

import { Route, Routes } from "react-router-dom";
import Dashboard from "./main/screens/dashboard";
import Team from "./main/screens/team";
import Contacts from "./main/screens/contact";

function App() {
  
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <div className="app"> */}
        <main className="content">
          <Box flexDirection={"row"} display="flex">
            <Box display="flex">
              <Sidebar_ isSidebar={isSidebar} />
            </Box>
            <Box sx={{ ml: 1, flex: 1 }}>
              <Topbar setIsSidebar={setIsSidebar} />
              {/* <BrowserRouter> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contacts />} />
              </Routes>
              {/* </BrowserRouter> */}
            </Box>
          </Box>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default  App;
