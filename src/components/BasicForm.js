import { useFormik } from "formik";
import basicSchema from "../schema";

const onSubmit = () => {
  console.log("Submitted");
}

const BasicForm = () => {
  const {values,errors,touched,handleBlur,handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPasswords: "",
    },
    validationSchema: basicSchema,
    onSubmit
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPasswords">Confirm Passwords</label>
      <input
        id="confirmPasswords"
        name="confirmPasswords"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        value={values.confirmPasswords}
        onBlur={handleBlur}
        className={errors.confirmPasswords && touched.confirmPasswords ? "input-error" : ""}
        />
        {errors.confirmPasswords && touched.confirmPasswords && <p className="error">{errors.confirmPasswords}</p>}
    </form>
  );
};

export default BasicForm;
