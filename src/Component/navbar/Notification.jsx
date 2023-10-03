import { Box, Button, Menu, Typography } from "@mui/material";
import { useEventDataGetQuery } from "../../Redux/apiSlice/apiSlice";
import { Link } from "react-router-dom";

const Notification = (props) => {
  const { data } = useEventDataGetQuery();
  const eventData = data?.data;
  const reversedData = eventData?.slice().reverse();
  const { anchorEl, menuId, isMenuOpen, handleMenuClose, setNotifiCount } =
    props;
  setNotifiCount(eventData?.length);
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ height: 300, width: 250 }} onClick={handleMenuClose}>
        <Typography textAlign="center" variant="h5" color="#000">
          Notification
        </Typography>
        {reversedData &&
          reversedData.map((event) => {
            return (
              <Box key={event._id}>
                <Button
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      color: "#000",
                    },
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                    to={`/detailsEvent/${event._id}`}
                  >
                    {event?.description.length > 25
                      ? event?.description.slice(0, 24) + "..."
                      : event?.description}
                  </Link>
                </Button>
              </Box>
            );
          })}
      </Box>
    </Menu>
  );
};

export default Notification;
