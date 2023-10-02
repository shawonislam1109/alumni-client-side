import { Link, useParams } from "react-router-dom";
import { useSingleEventDataQuery } from "../../../Redux/apiSlice/apiSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const DetailsEvent = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useSingleEventDataQuery(id);
  const details = data?.data;
  console.log(details);
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
        </CardActions>
      </Card>
    </Box>
  );
};

export default DetailsEvent;
