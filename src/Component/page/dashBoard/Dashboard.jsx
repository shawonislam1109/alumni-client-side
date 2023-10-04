import { Box, Button, Drawer } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useState } from "react";
import { useUserGetDataQuery } from "../../../Redux/apiSlice/apiSlice";

const Dashboard = () => {
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );

  const [active, setActive] = useState("currStudent");
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
      <Box>
        {filterLogin?.role == "admin" && (
          <Button
            onClick={() => setActive("student")}
            sx={active == "student" ? activeStatus : ""}
            size="small"
            startIcon={<AddBoxIcon />}
            variant="caption"
          >
            <Link
              to="/dashboard/allStudent"
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "GrayText",
              }}
            >
              All Student
            </Link>
          </Button>
        )}
      </Box>

      <Box>
        {filterLogin?.role == "admin" && (
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
        )}
      </Box>
      <Box>
        {filterLogin?.role == "admin" && (
          <Button
            onClick={() => setActive("Admin")}
            sx={active == "Admin" ? activeStatus : ""}
            size="small"
            startIcon={<AdminPanelSettingsIcon />}
            variant="caption"
          >
            <Link
              to="/dashboard/admin"
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                color: "GrayText",
              }}
            >
              All Admin
            </Link>
          </Button>
        )}
      </Box>

      <Box>
        <Button
          onClick={() => setActive("alumni")}
          sx={active == "alumni" ? activeStatus : ""}
          size="small"
          startIcon={<HistoryEduIcon />}
          variant="caption"
        >
          <Link
            to="/dashboard/alumni"
            style={{
              textDecoration: "none",
              fontSize: "1rem",
              color: "GrayText",
            }}
          >
            All Alumni
          </Link>
        </Button>
      </Box>

      <Box>
        <Button
          onClick={() => setActive("currStudent")}
          sx={active == "currStudent" ? activeStatus : ""}
          size="small"
          startIcon={<HistoryEduIcon />}
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
            Curr Student
          </Link>
        </Button>
      </Box>
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
      <Box width={-20} display={{ xs: "block", md: "none" }}>
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
