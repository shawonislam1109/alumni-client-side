import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button, Box, Typography } from "@mui/material";
import schema from "../schame";
import TextFieldCus from "../TextFieldCus";
import SelectField from "../SelectField";
import Department from "../Department";
import { useUpdateUserMutation } from "../../../Redux/apiSlice/apiSlice";
import { useDispatch } from "react-redux";
import { setEditModal } from "../../../Redux/feature/ModalSlice";
import toast from "react-hot-toast";
import ImageUpload from "../dashBoard/Event/ImageUpload";
import { useState, useEffect } from "react";

function UserEdit({ singleData }) {
  // upload image handle
  const [image, setImage] = useState(null);
  const [thumbnails, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  // update user mutation
  const [updateData, { data: updateUserData }] = useUpdateUserMutation();
  const userData = singleData?.data;
  const defaultValueIs = JSON.stringify(userData);
  const setDefaultValue = JSON.parse(defaultValueIs);
  setDefaultValue["thumbnail"] = null;
  // userData.thumbnail = "";
  // handle userForm Data
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: setDefaultValue,
  });

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

  //  toast handle
  const updateUser = (update) => {
    updateData(update);
    dispatch(setEditModal(false));
    toast.success("update successfully");
  };

  // handle submit updateData
  const onSubmit = (data) => {
    data["thumbnail"] = thumbnails;
    if (!data["thumbnail"]) {
      setDefaultValue["thumbnail"] = userData["thumbnail"];
    }
    updateUser(data);
  };

  //  call fun upload image
  useEffect(() => {
    uploadImage();
  }, [image]);

  return (
    <Box
      mt={2}
      height="70vh"
      sx={{
        overflowY: "scroll",
      }}
      width={{ xs: "80%", md: "60%" }}
      mx="auto"
    >
      <Typography variant="h5" mb={3} textAlign="center">
        User Update
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
          <Grid alignItems="center" item xs={12}>
            <Box textAlign="center" mb={3}>
              <Button type="submit" variant="contained" color="secondary">
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default UserEdit;
