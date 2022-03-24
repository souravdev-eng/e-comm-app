import * as Yup from 'yup';

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required('Oops! Name is required...'),
  email: Yup.string().required('Oops! Email is Required...').email(),
  password: Yup.string()
    .required('Oops! Password is Required...')
    .min(6, 'Oops! Please enter at least 6 characters...'),
  passwordAgain: Yup.string()
    .required('Oops! Password Again is Required...')
    .oneOf([Yup.ref('password')], 'Oops! Your passwords do not match...'),
});

export const signInValidation = Yup.object().shape({
  email: Yup.string().required('Oops! Email is Required...').email(),
  password: Yup.string()
    .required('Oops! Password is Required...')
    .min(6, 'Oops! Please enter at least 6 characters...'),
});
