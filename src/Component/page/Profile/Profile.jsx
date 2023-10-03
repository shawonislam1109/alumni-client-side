import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useUserGetDataQuery } from "../../../Redux/apiSlice/apiSlice";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useDispatch } from "react-redux";
import {
  setDeleteModal,
  setEditModal,
} from "../../../Redux/feature/ModalSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "../Modal/EditModal";
import DeleteModal from "../Modal/DeleteModal";
import LogoutIcon from "@mui/icons-material/Logout";
import toast from "react-hot-toast";

const Profile = () => {
  const { data } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));

  // filtering  authorize user
  const filterLogin = data?.data.find((data) => data?._id === loginData?._id);
  const dispatch = useDispatch();
  const logout = () => {
    toast.success("success logout");
    localStorage.clear();
    location.reload();
  };

  return (
    <Grid
      justifyContent="center"
      width={{ xs: "70%", md: "40%", lg: "30%" }}
      mx="auto"
      gap={3}
      my={5}
      container
      spacing={2}
    >
      <Grid xs={12}>
        <Box display="flex" justifyContent="center">
          <Avatar
            alt="Remy Sharp"
            src={
              filterLogin?.thumbnail
                ? filterLogin.thumbnail
                : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            }
            sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
          />
        </Box>
        {filterLogin?.role == "admin" && (
          <Box my={2} textAlign="center">
            <Button color="success" variant="contained" size="small">
              admin
            </Button>
          </Box>
        )}
        <Typography mt={2} textAlign="center">
          {filterLogin?.firstName} {filterLogin?.lastName}
        </Typography>
        <Box mt={3} display="flex" justifyContent="center"></Box>
        <Box mt={3}>
          <Typography mt={2} variant="h6" color="text.secondary">
            Email : {filterLogin?.email}
          </Typography>

          <Typography mt={2} variant="h6" color="text.secondary">
            Phone :{filterLogin?.phoneNumber}
          </Typography>

          <Typography mt={2} variant="h6" color="text.secondary">
            presentAddress :{filterLogin?.presentAddress}
          </Typography>
          <Typography mt={2} variant="h6" color="text.secondary">
            permanentAddress :{filterLogin?.permanentAddress}
          </Typography>
          <Typography mt={2} variant="h6" color="text.secondary">
            previousJobLocation :{filterLogin?.previousJobLocation}
          </Typography>
          <Typography mt={2} variant="h6" color="text.secondary">
            currentJobLocation :{filterLogin?.currentJobLocation}
          </Typography>

          <Typography mt={2} variant="h6" color="text.secondary">
            currentStatus :{filterLogin?.currentStatus}
          </Typography>
        </Box>

        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Button
            onClick={() => dispatch(setEditModal(true))}
            variant="contained"
            startIcon={<EditNoteIcon />}
            color="secondary"
          >
            Edit
          </Button>
          <Button
            onClick={() => dispatch(setDeleteModal(true))}
            color="error"
            variant="contained"
            size="small"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={logout}
            color="inherit"
            variant="contained"
            size="small"
            startIcon={<LogoutIcon />}
          >
            logOut
          </Button>
        </Box>
      </Grid>
      <EditModal id={filterLogin?._id} />
      <DeleteModal id={filterLogin?._id} />
    </Grid>
  );
};

export default Profile;
