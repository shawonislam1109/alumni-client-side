import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const CurrentStatusSelectField = ({ type, control, label }) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl fullWidth>
            <InputLabel error={!!error} htmlFor="grouped-select">
              Current Status
            </InputLabel>
            <Select
              color="secondary"
              defaultValue=""
              id="grouped-select"
              variant="filled"
              {...field}
              label="Curr Status"
              error={!!error}
              fullWidth
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="alumni">Alumni</MenuItem>
            </Select>
            <FormHelperText error>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
};

export default CurrentStatusSelectField;
