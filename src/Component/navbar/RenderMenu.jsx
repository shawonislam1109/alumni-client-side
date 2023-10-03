import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const RenderMenu = (props) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose, filterLogin } = props;
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
      {filterLogin && (
        <>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </>
      )}
    </Menu>
  );
};

export default RenderMenu;
