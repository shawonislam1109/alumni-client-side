import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useEventDeleteMutation,
  useSingleEventDataQuery,
  useUserGetDataQuery,
} from "../../../Redux/apiSlice/apiSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";

const DetailsEvent = () => {
  const { id } = useParams();
  const { data } = useSingleEventDataQuery(id);
  const navigate = useNavigate();
  const details = data?.data;

  //  check authorize admin
  const { data: allData } = useUserGetDataQuery();
  const loginData = JSON.parse(localStorage.getItem("login"));
  const filterLogin = allData?.data.find(
    (data) => data?._id === loginData?._id
  );

  //  event delete mutation
  const [deleteFn, { isError }] = useEventDeleteMutation();

  // Event delete handle
  const eventDeleteHandle = (eventId) => {
    deleteFn(eventId);
    if (isError) {
      toast.error("delete no success");
    } else {
      toast.success("deleted success");
      navigate("/event");
    }
  };

  return (
    <Box mt={3} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: { xs: 330, md: 400 } }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height={{ xs: 150, md: 180 }}
          image={details?.thumbnail}
        />
        <CardContent>
          <Typography component="div" variant="h6">
            <LocationOnIcon />
            {details?.location}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <AccessTimeIcon /> {details?.startDate}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <LocalLibraryIcon /> {details?.department}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            <SchoolIcon /> {details?.batch}
          </Typography>
          <Typography my={3} variant="body2" color="text.secondary">
            {details?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/dashboard/payment">
            <Button
              startIcon={<AttachMoneyIcon />}
              variant="contained"
              color="success"
              size="small"
            >
              {details?.fee}
            </Button>
          </Link>
          {filterLogin?.role == "admin" && (
            <Button
              onClick={() => eventDeleteHandle(id)}
              color="error"
              sx={{ ml: 2 }}
              size="small"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default DetailsEvent;
