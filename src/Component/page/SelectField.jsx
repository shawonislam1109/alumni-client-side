import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const SelectField = ({ type, control, label }) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl fullWidth>
            <InputLabel error={!!error} htmlFor="grouped-select">
              Job Status
            </InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              variant="standard"
              {...field}
              label="job Status"
              error={!!error}
              fullWidth
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
            <FormHelperText error>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
};

export default SelectField;
