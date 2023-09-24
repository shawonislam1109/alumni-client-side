import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("firstName is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  phoneNumber: yup
    .string()
    .min(11, "number min will be 11")
    .required("number is required"),
  presentAddress: yup.string().required("This required field"),
  permanentAddress: yup.string().required("This is required "),
  currentStatus: yup.string().required("this is required"),
});

export default schema;
