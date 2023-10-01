import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";

const Department = ({ type, control, label }) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl fullWidth>
            <InputLabel error={!!error} htmlFor="grouped-select">
              Department
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
              <MenuItem value="computer">Computer</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="mechanical">mechanical</MenuItem>
              <MenuItem value="Cvil">Cvil</MenuItem>
              <MenuItem value="Power">Power</MenuItem>
            </Select>
            <FormHelperText error>{error?.message}</FormHelperText>
          </FormControl>
        </>
      )}
    />
  );
};

export default Department;
