import { Box, Button, Grid, Typography } from "@mui/material";
import TextFieldCus from "../../TextFieldCus";
import Department from "../../Department";
import { useForm } from "react-hook-form";
import EventDate from "./EventDate";
import ImageUpload from "./ImageUpload";
import Descript from "./Descript";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaEvent from "./eventSchma";
import { useEffect, useState } from "react";
import { useEventPostDataMutation } from "../../../../Redux/apiSlice/apiSlice";
import toast from "react-hot-toast";

const AddEvent = () => {
  const [eventPost, { data: eventData }] = useEventPostDataMutation();
  const [image, setImage] = useState(null);
  const [thumbnails, setSelectedImage] = useState(null);
  const { handleSubmit, control, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaEvent),
  });

  //    image Upload cloud
  const convertBase64 = () => {
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
  //   handle submit event data
  const eventOnSubmit = (data) => {
    data["thumbnail"] = thumbnails;
    eventPost(data);
  };

  useEffect(() => {
    convertBase64();
  }, [image]);

  useEffect(() => {
    if (eventData?.data.location) {
      toast.success("event added successfully");
      reset();
    }
  }, [eventData]);
  return (
    <Box>
      <Typography mt={2} textAlign="center" variant="h6">
        Add Event
      </Typography>

      <Box mt={2} width="50%" mx="auto">
        <form onSubmit={handleSubmit(eventOnSubmit)}>
          <Grid container spacing={2}>
            {/* Location */}
            <Grid item xs={12} sm={12} md={6}>
              <TextFieldCus control={control} label="location" />
            </Grid>
            {/* Batch */}
            <Grid item xs={12} sm={12} md={6}>
              <TextFieldCus control={control} label="batch" />
            </Grid>
            {/* Fee section */}
            <Grid item xs={12} sm={12} md={6}>
              <TextFieldCus control={control} label="fee" type="number" />
            </Grid>

            {/* Department section */}
            <Grid item xs={12} sm={12} md={6}>
              <Department control={control} label="department" />
            </Grid>
            {/* Event Date section */}
            <Grid item xs={12} sm={12} md={6}>
              <EventDate control={control} label="startDate" />
            </Grid>
            {/* Upload File section  */}
            <Grid item xs={12} sm={12} md={6}>
              <ImageUpload
                setImage={setImage}
                control={control}
                label="thumbnail"
              />
            </Grid>
            {/* Description section  */}
            <Grid item xs={12}>
              <Descript control={control} label="description" />
            </Grid>

            <Grid alignItems="center" item xs={12}>
              <Box textAlign="center" mb={3}>
                <Button type="submit" variant="contained" color="secondary">
                  Create
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default AddEvent;
