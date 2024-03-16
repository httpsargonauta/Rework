// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';
import instance from './endpoint/routeapi';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '', name: '', lastname: '', isEmploye: false }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        postDataApi('auth/login', values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-4 w-1/3'>
          {/*
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="lastname">Lastname</label>
          <Field type="text" name="lastname" />
          <ErrorMessage name="lastname" component="div" />*/}
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />{/*
          <label htmlFor="isEmploye">isEmploye</label>
          <Field type="bool" name="isEmploye" />
          <ErrorMessage name="isEmploye" component="div" />
          */}
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

export const postDataApi = (endpoint, data) => {
  return instance.post(endpoint, data).then((res) => {
    return res.data
  }).catch(err => {
    console.error(err);
    return err;
  });
}

export const getDataApi = (endpoint) => {
  return instance.get(endpoint).then((res) => {
    console.log(res.data)
    return res.data
  }).catch(err => {
    console.error(err);
    return err;
  });
}