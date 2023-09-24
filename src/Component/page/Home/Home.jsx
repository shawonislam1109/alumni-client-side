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
const Home = () => {
  const { data } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = data?.data.find((data) => data?._id === loginData?._id);

  return (
    <Box>
      <Grid
        justifyContent="center"
        width="95%"
        mx="auto"
        gap={3}
        my={5}
        container
        spacing={2}
      >
        {data &&
          data?.data.map((data) => {
            return (
              <Grid xs={12} md={3} key={data._id}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
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
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Home;
