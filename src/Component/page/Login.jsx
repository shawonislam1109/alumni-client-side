import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUserPostLogInMutation } from "../../Redux/apiSlice/apiSlice";
import TextFieldCus from "./TextFieldCus";
import toast from "react-hot-toast";

const Box = styled("Box")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  marginLeft: "auto",
  marginRight: "auto",
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
const schema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [postLogin, { data }] = useUserPostLogInMutation();

  // login data set in localStore
  if (data?.token) {
    localStorage.setItem("token", data?.token);
    localStorage.setItem("login", JSON.stringify(data?.data));
  }
  const authLogin = () => {
    if (data?.status == "success") {
      toast.success("successfully login");
      navigate("/");
    } else {
      toast.error("Envalid Email");
    }
  };

  // hook form useState
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = (FormData) => {
    postLogin(FormData);
    authLogin();
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography color="CaptionText" textAlign="center" my={5} variant="h5">
          LOG IN{" "}
        </Typography>
        <Grid justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <TextFieldCus control={control} label="email" />
          </Grid>
          <Grid my={3} item xs={12}>
            <TextFieldCus control={control} type="password" label="password" />
          </Grid>
        </Grid>

        <Typography my={3} textAlign="center" variant="body1">
          I have no account <Link to="/register">Register</Link>
        </Typography>

        <div style={{ textAlign: "center" }}>
          <Button variant="contained" type="submit">
            LOG IN
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default Login;
