import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button, Box, Typography } from "@mui/material";
import { useUserPostRegMutation } from "../../Redux/apiSlice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import schema from "./schame";
import TextFieldCus from "./TextFieldCus";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [userReg, { data: userRegData }] = useUserPostRegMutation();
  console.log(userRegData);
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    // defaultValues,
  });
  // const { fields, append, remove } = useFieldArray({
  //   name: "phoneNumber",
  //   control,
  // });
  const authReg = (data) => {
    if (userRegData?.status == "success") {
      toast.success("successfully login");
      localStorage.setItem("login", JSON.stringify(data?.data));
      navigate("/");
    } else {
      toast.error("Email Already use ");
    }
  };

  const onSubmit = (data) => {
    userReg(data);
  };

  if (userRegData?.status == "success") {
    authReg(userRegData);
  }

  return (
    <Box mt={2} width="50%" mx="auto">
      <Typography variant="h5" mb={3} textAlign="center">
        Student Regisation
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* firstName */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="firstName" />
          </Grid>
          {/* LastName */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="lastName" />
          </Grid>
          {/* password */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="password" type="password" />
          </Grid>
          {/* Email */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="email" />
          </Grid>
          {/* {fields?.map((field, index) => {
            return (
              <>

              </>
            );
          })} */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="phoneNumber" />
          </Grid>

          {/* <Grid item xs={12} sm={12} md={6}>
            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={() => append({ phNumber: " " })}>
              Phone +
            </Button>
          </Grid> */}
          {/* presentAddress */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="presentAddress" />
          </Grid>
          {/* parmanetAddress */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="permanentAddress" />
          </Grid>
          {/* currentJobLocation */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="currentJobLocation" />
          </Grid>
          {/* previousJobLocation */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="previousJobLocation" />
          </Grid>
          {/* currentStatus */}
          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="currentStatus" />
          </Grid>
          <Grid alignItems="center" item xs={12}>
            <Typography my={3} variant="subtitle1" textAlign="center">
              I have already account <Link to="/login">Log in</Link>
            </Typography>
            <Box textAlign="center" mb={3}>
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Register;
