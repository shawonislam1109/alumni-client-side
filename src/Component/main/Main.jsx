import { Outlet } from "react-router-dom";
import NavSection from "../navbar/ResNav";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box>
      <NavSection />
      <Box mt={9}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
