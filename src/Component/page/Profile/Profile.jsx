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

const Profile = () => {
  const { data } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = data?.data.find((data) => data?._id === loginData?._id);
  const dispatch = useDispatch();
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
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200"
            sx={{ width: { xs: 50, md: 100 }, height: { xs: 50, md: 100 } }}
          />
        </Box>
        <Typography mt={2} textAlign="center">
          {filterLogin?.firstName} {filterLogin?.lastName}
        </Typography>
        <Box mt={3} display="flex" justifyContent="center">
          <Button
            onClick={() => dispatch(setEditModal(true))}
            variant="contained"
            startIcon={<EditNoteIcon />}
            color="secondary"
          >
            Edit
          </Button>
        </Box>
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

        <Box mt={3} display="flex" justifyContent="center">
          <Button
            onClick={() => dispatch(setDeleteModal(true))}
            color="error"
            variant="contained"
            size="small"
            startIcon={<DeleteIcon />}
          >
            Delete account
          </Button>
        </Box>
      </Grid>
      <EditModal id={filterLogin?._id} />
      <DeleteModal id={filterLogin?._id} />
    </Grid>
  );
};

export default Profile;
