import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImageUpload = ({ type, control, label, setImage }) => {
  return (
    <>
      <Controller
        name={label}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextField
              {...field}
              type="file"
              error={!!error}
              helperText={error?.message}
              color="secondary"
              id="file-upload"
              inputProps={{ accept: ".pdf,.doc,.docx" }}
              onChange={(e) => setImage(e)}
            />
          </>
        )}
      />
    </>
  );
};

export default ImageUpload;
