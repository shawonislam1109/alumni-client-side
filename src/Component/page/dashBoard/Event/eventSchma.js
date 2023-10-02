import * as yup from "yup";

const schemaEvent = yup.object().shape({
    location: yup.string().required("This is required"),
    batch: yup.string().required("This is required"),
    fee: yup
    .string()
    .required("number is required"),
    startDate: yup.date()
    .required("Start  Date  is required")
    .nullable()
    .typeError("Start date is required"),
    // thumbnail: yup.string().required("thumbnail required field"),
    description: yup.string().required("description is required ").min(10 , 'min you read 10 word'),
    department :  yup.string().required("this is required"),
});

export default schemaEvent;