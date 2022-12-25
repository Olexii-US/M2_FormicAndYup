import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

///////////yup validation

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

//////////////for css/////////////
const Input = styled(Field)`
  color: green;
`;
const Error = styled(ErrorMessage)`
  color: red;
`;
/////////////////////formic///////////////////////////////////
const initialValues = { login: '', password: '' };

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          {/* <Field type="text" name="login" id="" /> */}
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          {/* <Field type="password" name="password" id="" /> */}
          <Input type="password" name="password" />
          <Error name="password" component="div" />
          {/* <ErrorMessage name="password" component="div" /> */}
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

////////// форма неконтрал елементів ////////////////////
// export const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();

//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login
//         <input type="text" name="login" id="" />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input type="password" name="password" id="" />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
