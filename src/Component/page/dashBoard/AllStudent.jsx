import { deepOrange } from "@mui/material/colors";
import { useUserGetDataQuery } from "../../../Redux/apiSlice/apiSlice";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useDispatch, useSelector } from "react-redux";
import { setAdminDelete } from "../../../Redux/feature/ModalSlice";
import EditModal from "../Modal/EditModal";
import { Link } from "react-router-dom";
import SearchFilter from "../Search/SearchFilter";
import AdminDelete from "../Modal/AdminDelete";
import { useState } from "react";

export default function AllStudent() {
  const { data } = useUserGetDataQuery();
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();
  const { filterGlobal, filterDepartment, filterStatus } = useSelector(
    (state) => state.SearchSlice
  );
  // store get Data ;
  let allStudent = data?.data;
  //  all data mapIng
  let allStudentMap = allStudent;

  // filter by global
  if (filterGlobal) {
    allStudentMap = allStudent.filter(
      (student) =>
        student.firstName
          .toLowerCase()
          .startsWith(filterGlobal.toLowerCase()) ||
        student.phoneNumber
          .toLowerCase()
          .startsWith(filterGlobal.toLowerCase()) ||
        student.email.toLowerCase().startsWith(filterGlobal.toLowerCase())
    );
  }

  // filter by department
  if (filterDepartment) {
    allStudentMap = allStudent.filter(
      (student) =>
        student.department.toLowerCase() == filterDepartment.toLowerCase()
    );
  }
  //  ||
  // filter by job status
  if (filterStatus || filterStatus === false) {
    allStudentMap = allStudent.filter(
      (student) => student.jobStatus == filterStatus
    );
  }
  return (
    <Box>
      <Box my={2}>
        <SearchFilter />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#7B1FA2" }}>
              <TableCell sx={{ color: "white" }}>No</TableCell>
              <TableCell></TableCell>
              <TableCell sx={{ color: "white" }} color="white">
                Name
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Email
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Phone
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Department
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                JObStatus
              </TableCell>
              <TableCell sx={{ color: "white" }} align="left">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allStudentMap?.map((data, index) => (
              <TableRow
                key={data._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell>
                  <Avatar
                    src={
                      data?.thumbnail
                        ? data.thumbnail
                        : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                    }
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
                <TableCell align="left">{data?.department}</TableCell>
                <TableCell align="left">
                  {data?.jobStatus ? "Yes" : "No"}
                </TableCell>
                <TableCell align="left">
                  <Box display="flex">
                    <IconButton
                      color="error"
                      onClick={() => {
                        setDeleteId(data._id);
                        dispatch(setAdminDelete(true));
                      }}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`/singeStudent/${data._id}`}>
                      <IconButton color="secondary">
                        <RateReviewIcon />
                      </IconButton>
                    </Link>
                  </Box>
                  <EditModal id={data._id} />
                  <AdminDelete deleteId={deleteId} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
