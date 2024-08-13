import { useFormik } from "formik";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPasswords: "",
    },
  });

  console.log(formik);

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <label htmlFor="password">Password</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
        onChange={formik.handleChange}
        value={formik.values.confirmPasswords}
        onBlur={formik.handleBlur}
      />
    </form>
  );
};

export default BasicForm;
