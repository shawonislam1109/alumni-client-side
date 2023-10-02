import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import {
  useEventDataGetQuery,
  useUserGetDataQuery,
} from "../../../Redux/apiSlice/apiSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Event = () => {
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );
  const { data } = useEventDataGetQuery();
  const eventData = data?.data;
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%" },
        mx: "auto",
      }}
    >
      <Typography variant="h6" mt={2} textAlign="center">
        Event
      </Typography>

      <Box>
        <Grid container gap={2} spacing={2}>
          {eventData &&
            eventData.map((event) => {
              return (
                <Grid item xs={12} md={5} key={event._id}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={event.thumbnail}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h6">
                          <LocationOnIcon />
                          {event.location}
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
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Event;
