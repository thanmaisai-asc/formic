import { useFormik } from "formik";
import basicSchema from "../schema";

const BasicForm = () => {
  const {values,handleBlur,handleChange} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPasswords: "",
    },
    validationSchema: basicSchema,
  });

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
      />

      <label htmlFor="confirmPasswords">Confirm Passwords</label>
      <input
        id="confirmPasswords"
        name="confirmPasswords"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={values.confirmPasswords}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default BasicForm;
