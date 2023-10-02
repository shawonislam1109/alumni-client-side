import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const TextFieldCus = ({ type, control, label }) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant="filled"
          fullWidth
          size="small"
          color="secondary"
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextFieldCus;
