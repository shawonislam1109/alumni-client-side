import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

const schema = yup.object().shape({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("firstName is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  phoneNumber: yup.array().of(
    yup.object({
      phNumber: yup
        .string()
        .min(11, "number min will be 11")
        .required("number is required"),
    })
  ),
  presentAddress: yup.string().required("This required field"),
  permanentAddress: yup.string().required("This is required "),
  currentStatus: yup.string().required("this is required"),
});

function AddStudent() {
  const defaultValues = {
    phoneNumber: [{ phNumber: "" }],
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    name: "phoneNumber",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box mt={2}>
      <Typography variant="h5" mb={3} textAlign="center">
        Create Student
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="firstName"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="lastName"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          {fields?.map((field, index) => {
            return (
              <>
                <Grid item xs={12} sm={12} md={6}>
                  <Controller
                    name={`phoneNumber[${index}].phNumber`}
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <Box>
                        <TextField
                          {...field}
                          defaultValue=""
                          variant="outlined"
                          //   sx={{ width: 250 }}
                          error={!!error}
                          size="small"
                          helperText={error?.message}
                          label="Phone Number"
                        />

                        <Button
                          onClick={() => remove(index)}
                          variant="contained"
                          color="error"
                          size="small"
                        >
                          -
                        </Button>
                      </Box>
                    )}
                  />
                </Grid>
              </>
            );
          })}
          <Grid item xs={12} sm={12} md={6}>
            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={() => append({ phNumber: " " })}
            >
              Phone +
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="presentAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="presentAddress"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors.presentAddress}
                  helperText={errors.presentAddress?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="permanentAddress"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="permanentAddress"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors?.permanentAddress}
                  helperText={errors?.permanentAddress?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="currentJobLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="currentJobLocation"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors?.currentJobLocation}
                  helperText={errors?.currentJobLocation?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="previousJobLocation"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="previousJobLocation"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors?.previousJobLocation}
                  helperText={errors?.previousJobLocation?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Controller
              name="currentStatus"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="currentStatus"
                  variant="outlined"
                  fullWidth
                  size="small"
                  error={!!errors?.currentStatus}
                  helperText={errors?.currentStatus?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default AddStudent;
