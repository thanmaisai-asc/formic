import { Field, Form, Formik } from "formik";

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ name: 'Thanmai', lastName: 'Doe', color: 'red' }}
    >
      {props => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <Field name="lastName">
            {({
              field, // { name, value, onChange, onBlur }
              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
              meta,
            }) => (
              <div>
                <input type="text" placeholder="Email" {...field} />
                {meta.touched && meta.error && (
                  <div className="error">{meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <Field name="lastName" component={MyInput} placeholder="Doe" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;