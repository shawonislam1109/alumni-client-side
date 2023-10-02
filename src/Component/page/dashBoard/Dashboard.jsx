import { Box, Button, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCardIcon from "@mui/icons-material/AddCard";
import EventIcon from "@mui/icons-material/Event";
import { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState("student");
  const activeStatus = {
    borderLeft: "3px solid #7B1FA2",
  };
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Box bgcolor="#e8e8e8" position={"static"} width="25%" height="80vh">
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
            <Button
              onClick={() => setActive("payment")}
              sx={active == "payment" ? activeStatus : ""}
              size="small"
              startIcon={<AddCardIcon />}
              variant="caption"
            >
              <Link
                to="/dashboard/payment"
                style={{
                  textDecoration: "none",
                  fontSize: "1rem",
                  color: "GrayText",
                }}
              >
                Payment
              </Link>
            </Button>
          </Box>
        </Box>
        <Box width="75%" ml={3}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
