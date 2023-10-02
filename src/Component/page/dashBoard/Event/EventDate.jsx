import { FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { Controller } from "react-hook-form";

const EventDate = ({ type, control, label }) => {
  return (
    <>
      <Controller
        name={label}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <FormControl fullWidth>
              <DatePicker
                {...field}
                disablePast
                size="small"
                label={label}
                onChange={(newValue) => {
                  field.onChange(newValue.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "filled",
                    color: "secondary",
                    error: !!error,
                    helperText: error?.message,
                  },
                }}
              />
            </FormControl>
          </>
        )}
      />
    </>
  );
};

export default EventDate;
