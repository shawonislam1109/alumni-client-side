import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import image from '../'
// Define custom CSS styles
const aboutContainer = {
  backgroundImage: "linear-gradient(to bottom, #4caf50, #2196f3)",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const backgroundImageUrl =
  'url( "https://media.istockphoto.com/id/1165683016/photo/happy-students-walking-together-in-campus-having-break.jpg?s=170667a&w=0&k=20&c=Q6719G7OMZk87adkoilhRMYzfHiw35ZsHMJumg85VR8=")';
const imageBox = {
  backgroundImage: backgroundImageUrl,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "100%",
};

const AboutPage = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center" height={400} sx={imageBox}>
        <Box mt={5}>
          <Typography alignItems="center" variant="h3" color="secondary">
            About Our Alumni Association
          </Typography>
          <Box bgcolor="#7B1FA2" borderRadius={3} p={2}>
            <Typography
              width={400}
              alignItems="center"
              variant="body1"
              color="white"
            >
              Welcome to the official page of our Alumni Association. We are
              proud to connect with and celebrate our alumni, who have achieved
              remarkable success in various fields.
            </Typography>
          </Box>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                sx={{ mt: 2 }}
                color="secondary"
                variant="contained"
                size="small"
              >
                see more
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            About Our Alumni Association
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the official page of our Alumni Association. We are proud
            to connect with and celebrate our alumni, who have achieved
            remarkable success in various fields.
          </Typography>
          <Typography variant="body1" paragraph>
            Our Mission: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam eget odio at erat iaculis tristique. Sed id diam nec
            libero posuere ullamcorper.
          </Typography>
          <Typography variant="body1" paragraph>
            Our History: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam eget odio at erat iaculis tristique. Sed id diam nec
            libero posuere ullamcorper.
          </Typography>
          <Typography variant="body1" paragraph>
            Our Team: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam eget odio at erat iaculis tristique. Sed id diam nec libero
            posuere ullamcorper.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
