import { deepOrange } from "@mui/material/colors";
import { useUserGetDataQuery } from "../../../Redux/apiSlice/apiSlice";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setDeleteModal,
  setEditModal,
} from "../../../Redux/feature/ModalSlice";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";

export default function AllStudent() {
  const dispatch = useDispatch();
  const { data, isLoading } = useUserGetDataQuery();
  useEffect(() => {
    if (isLoading) {
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>;
    }
  }, [isLoading]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.map((data, index) => (
            <TableRow
              key={data._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell>
                <Avatar
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                  sx={{ bgcolor: deepOrange[500] }}
                >
                  N
                </Avatar>
              </TableCell>

              <TableCell component="th" scope="row">
                {data.firstName}
              </TableCell>
              <TableCell align="left">{data.email}</TableCell>
              <TableCell align="left">{data?.phoneNumber}</TableCell>
              <TableCell align="left">{data.currentStatus}</TableCell>
              <TableCell align="left">
                <Box display="flex">
                  <IconButton
                    onClick={() => dispatch(setDeleteModal(true))}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch(setEditModal(true))}
                    aria-label="edit"
                  >
                    <EditNoteIcon />
                  </IconButton>
                </Box>
                <DeleteModal id={data._id} />
                <EditModal id={data._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
