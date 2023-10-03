import { Outlet } from "react-router-dom";
import NavSection from "../navbar/ResNav";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <div>
      <NavSection />
      <Box mt={9}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Main;
