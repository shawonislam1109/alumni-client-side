import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button, Box, Typography } from "@mui/material";
import schema from "../schame";
import TextFieldCus from "../TextFieldCus";
import SelectField from "../SelectField";
import Department from "../Department";
import {
  useSingleStudentQuery,
  useUpdateUserMutation,
} from "../../../Redux/apiSlice/apiSlice";
import { useDispatch } from "react-redux";
import { setEditModal } from "../../../Redux/feature/ModalSlice";
import toast from "react-hot-toast";

function UserEdit({ userId }) {
  const dispatch = useDispatch();
  const { data: singleData } = useSingleStudentQuery(userId);
  const [updateData, { data: updateUserData }] = useUpdateUserMutation();
  const userData = singleData?.data;
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: userData,
  });

  // const { fields, append, remove } = useFieldArray({
  //   name: "phoneNumber",
  //   control,
  // });

  const updateUser = (update) => {
    updateData(update);
    dispatch(setEditModal(false));
    toast.success("update successfully");
  };

  const onSubmit = (data) => {
    updateUser(data);
  };

  return (
    <Box mt={2} width="50%" mx="auto">
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
          {/* Department section */}
          <Grid item xs={12} sm={12} md={6}>
            <Department control={control} label="department" />
          </Grid>
          {/* job Status section */}
          <Grid item xs={12} sm={12} md={6}>
            <SelectField control={control} label="jobStatus" />
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
