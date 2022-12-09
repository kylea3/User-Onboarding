import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullName: yup
        .string()
        .trim()
        .required('Full Name is required'),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required('You must enter an email'),
    password: yup
        .string()
        .min(6, 'Must be 6 chars minimum'),
    termsOfUse: yup.boolean().oneOf([true], 'This field must be checked'),

})

export default formSchema;