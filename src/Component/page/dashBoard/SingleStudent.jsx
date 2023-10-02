import { useParams } from "react-router-dom";
import {
  useSingleStudentQuery,
  useUserGetDataQuery,
} from "../../../Redux/apiSlice/apiSlice";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

const SingleStudent = () => {
  const { id } = useParams();
  const { data: singleData, isLoading } = useSingleStudentQuery(id);
  const data = singleData?.data;

  //  check authorize admin
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );

  console.log(filterLogin);
  // loading
  if (isLoading) {
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>;
  }
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
      <Grid xs={12} key={data?._id}>
        <Card>
          <CardMedia
            sx={{ height: 140 }}
            image="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.firstName} {data?.lastName}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Email : {data?.email}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Phone :{data?.phoneNumber}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              presentAddress :{data?.presentAddress}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              permanentAddress :{data?.permanentAddress}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              previousJobLocation :{data?.previousJobLocation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              currentJobLocation :{data?.currentJobLocation}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              currentStatus :{data?.currentStatus}
            </Typography>
          </CardContent>

          {filterLogin?.role == "admin" && (
            <Box>
              {data?.role == "admin" ? (
                <Box my={2} textAlign="">
                  <Button color="success" variant="contained" size="small">
                    admin
                  </Button>
                </Box>
              ) : (
                <Box my={3}>
                  <Button variant="contained" color="secondary" size="small">
                    create Admin
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default SingleStudent;
