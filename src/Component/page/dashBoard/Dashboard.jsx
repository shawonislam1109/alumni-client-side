import { Box, Button, Drawer } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState("student");
  const activeStatus = {
    borderLeft: "3px solid #7B1FA2",
  };

  // dower handle
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // dashBoard menu
  const dashBoardMenu = (
    <Box mt={3} ml={3}>
      <Button
        onClick={() => setActive("student")}
        sx={active == "student" ? activeStatus : ""}
        size="small"
        startIcon={<AddBoxIcon />}
        variant="caption"
      >
        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            fontSize: "1rem",
            color: "GrayText",
          }}
        >
          All Student
        </Link>
      </Button>
      <Button
        onClick={() => setActive("event")}
        sx={active == "event" ? activeStatus : ""}
        size="small"
        startIcon={<EventIcon />}
        variant="caption"
      >
        <Link
          to="/dashboard/event"
          style={{
            textDecoration: "none",
            fontSize: "1rem",
            color: "GrayText",
          }}
        >
          Add Event
        </Link>
      </Button>
    </Box>
  );

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display={{ xs: "none", md: "block" }}
        bgcolor="#e8e8e8"
        position={"static"}
        width="17%"
        height="100vh"
      >
        {dashBoardMenu}
      </Box>
      <Box display={{ xs: "block", md: "none" }}>
        <Button onClick={toggleDrawer}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer}
        >
          {dashBoardMenu}
        </Drawer>
      </Box>
      <Box
        width="75%"
        height="100vh"
        sx={{ overflowX: "scroll", overflowY: "none" }}
        ml={3}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
