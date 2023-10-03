import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button, Box, Typography } from "@mui/material";
import { useUserPostRegMutation } from "../../Redux/apiSlice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import schema from "./schame";
import TextFieldCus from "./TextFieldCus";
import toast from "react-hot-toast";
import SelectField from "./SelectField";
import Department from "./Department";
import ImageUpload from "./dashBoard/Event/ImageUpload";
import { useState } from "react";
import { useEffect } from "react";

function Register() {
  // upload image handle
  const [image, setImage] = useState(null);
  const [thumbnails, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  // post apiSlice reg Data
  const [userReg, { data: userRegData, isError }] = useUserPostRegMutation();

  // react hook from handle
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // check authorize with toast
  const authReg = (data) => {
    if (userRegData?.status == "success") {
      toast.success("successfully ");
      localStorage.setItem("login", JSON.stringify(data?.data));
      navigate("/");
    } else {
      toast.error("Email Already use ");
    }
  };

  //    image Upload cloud
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image?.target?.files[0]);
    data.append("upload_preset", "qii754l9");
    data.append("cloud_name", "dxatljtkl");
    fetch("https://api.cloudinary.com/v1_1/dxatljtkl/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedImage(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle submit
  const onSubmit = (data) => {
    data["thumbnail"] = thumbnails;
    userReg(data);
    authRegFail();
  };

  // check authorize with toast
  const authRegFail = () => {
    if (isError) {
      toast.error("Email Already use ");
    }
  };

  // check authorize with toast
  if (userRegData?.status == "success") {
    authReg(userRegData);
  }

  //  call fun upload image
  useEffect(() => {
    uploadImage();
  }, [image]);

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

          <Grid item xs={12} sm={12} md={6}>
            <TextFieldCus control={control} label="phoneNumber" />
          </Grid>

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
          {/* Department section */}
          <Grid item xs={12} sm={12} md={6}>
            <Department control={control} label="department" />
          </Grid>
          {/* job Status section */}
          <Grid item xs={12} sm={12} md={6}>
            <SelectField control={control} label="jobStatus" />
          </Grid>
          {/* imageUpload */}
          <Grid item xs={12} sm={12} md={6}>
            <ImageUpload
              setImage={setImage}
              control={control}
              label="thumbnail"
            />
          </Grid>

          {/*  */}
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
