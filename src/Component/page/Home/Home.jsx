import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useUserGetDataQuery } from "../../../Redux/apiSlice/apiSlice";
import { Link } from "react-router-dom";
import SearchFilter from "../Search/SearchFilter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import { useSelector } from "react-redux";
const Home = () => {
  const { data } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = data?.data.find((data) => data?._id === loginData?._id);
  const { filterGlobal, filterDepartment, filterStatus } = useSelector(
    (state) => state.SearchSlice
  );
  // store get Data ;
  let allStudent = data?.data;
  //  all data mapIng
  let allStudentMap = allStudent;

  // filter by name
  if (filterGlobal) {
    allStudentMap = allStudent.filter((student) =>
      student.firstName.toLowerCase().startsWith(filterGlobal.toLowerCase())
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
  if (filterStatus) {
    allStudentMap = allStudent.filter(
      (student) => student.jobStatus == filterStatus
    );
  }

  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        mt: 2,
      }}
    >
      <Box>
        <SearchFilter />
      </Box>
      <Grid justifyContent="center" gap={3} my={5} container spacing={2}>
        {allStudentMap &&
          allStudentMap.map((data) => {
            return (
              <Grid xs={12} key={data._id}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 220, width: 200 }}
                    image="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
                    title="green iguana"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {/* <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      <LocationOnIcon />
                      {data.firstName} {data.lastName}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      <AccessTimeIcon /> {event.startDate}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      <SchoolIcon /> {event.batch}
                    </Typography>
                    {filterLogin && (
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                      >
                        <Link
                          to={`/detailsEvent/${event._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          details
                        </Link>
                      </Button>
                    )}
                  </CardContent> */}
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.firstName} {data.lastName}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        presentAddress :{data.presentAddress}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        permanentAddress :{data.permanentAddress}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        previousJobLocation :{data?.previousJobLocation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        currentStatus :{data?.currentStatus}
                      </Typography>
                      <CardActions>
                        {filterLogin && (
                          <Button
                            sx={{ mt: 1 }}
                            variant="outlined"
                            color="secondary"
                            size="small"
                          >
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/singeStudent/${data._id}`}
                            >
                              Details
                            </Link>
                          </Button>
                        )}
                      </CardActions>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Home;
