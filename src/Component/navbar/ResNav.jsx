import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Divider, Drawer, List, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserGetDataQuery } from "../../Redux/apiSlice/apiSlice";
import { useState } from "react";
import RenderMobileMenu from "./RenderMobileMenu";
import RenderMenu from "./RenderMenu";
import Notification from "./Notification";

// search style
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// SearchIconWrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// StyledInputBase
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const drawerWidth = 240;

export default function NavSection(props) {
  // user Authorize check
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );

  // profile menu open state
  const [anchorEl, setAnchorEl] = useState(null);
  // notification open profile section
  const [notification, setNotification] = useState(null);
  // count notification
  const [notifiCount, setNotifiCount] = useState(0);

  //  mobile more icons button handle state
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // mobile responsive dower
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // notification Boolean value
  const isNotificationOpen = Boolean(notification);

  // mobile res handle
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //  profile click handle
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // notification click handle
  const handleNotification = (event) => {
    setNotification(event.currentTarget);
  };

  //  dower close handle
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // handleMenuClose
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // notification Handle close
  const handleNotificationClose = () => {
    setNotification(null);
    handleMobileMenuClose();
  };

  // handle mobileMenu open
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  //   navbar menu item
  const navMenu = (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Box>
          <Link style={{ textDecoration: "none", color: "white" }}>Home</Link>
        </Box>
        <Box>
          <Link
            to="/aboutPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            About
          </Link>
        </Box>

        <Box>
          <Link to="/event" style={{ textDecoration: "none", color: "white" }}>
            Event
          </Link>
        </Box>

        {!filterLogin && (
          <Box>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </Box>
        )}

        {filterLogin && (
          <Box>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              DashBoard
            </Link>
          </Box>
        )}
      </Stack>
    </Box>
  );

  // dower symbol
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        ALUMNI
      </Typography>
      <Divider />
      <List>{navMenu}</List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App bar section */}
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          bgcolor: "#7B1FA2",
        }}
      >
        <Toolbar>
          {/* menu icons for mobile section */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* menu name */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            ALUMNI
          </Typography>

          {/* search in navbar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />

          {/* menu Item of navbar */}
          <Box mr={20} sx={{ display: { xs: "none", md: "block" } }}>
            {navMenu}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* message Icons */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            {/* Notification icons */}
            <IconButton
              size="large"
              onClick={handleNotification}
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={notifiCount} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* profile icons */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Box display="flex" justifyContent="center">
                <Avatar
                  sx={{ width: 24, height: 24 }}
                  alt="Remy Sharp"
                  src={
                    filterLogin?.thumbnail ? (
                      filterLogin.thumbnail
                    ) : (
                      <AccountCircle />
                    )
                  }
                />
              </Box>
            </IconButton>
          </Box>

          {/* more icons for mobile device  */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* dower section */}
      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#7B1FA2",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/*renderMobile  */}
      {/* {renderMobileMenu} */}
      <RenderMobileMenu
        handleNotification={handleNotification}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        filterLogin={filterLogin}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />

      {/* renderMenu */}
      <RenderMenu
        filterLogin={filterLogin}
        handleMenuClose={handleMenuClose}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
      />

      {/* renderNotification */}
      <Notification
        setNotifiCount={setNotifiCount}
        anchorEl={notification}
        handleMenuClose={handleNotificationClose}
        isMenuOpen={isNotificationOpen}
      />
    </Box>
  );
}
NavSection.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
