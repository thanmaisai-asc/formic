import * as yup from "yup";

/**
 * Here's a breakdown of what the regular expression does:
 * ^ asserts the start of the string.
 * (?=.*[a-z]) is a positive lookahead assertion that checks if the string contains at least one lowercase letter (a-z).
 * (?=.*[A-Z]) is a positive lookahead assertion that checks if the string contains at least one uppercase letter (A-Z).
 * (?=.*\d) is a positive lookahead assertion that checks if the string contains at least one numeric digit (\d).
 * .{5,} matches any character (.) between 5 and unlimited times ({5,}).
 * $ asserts the end of the string.
 */
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;

const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(8, "Password must be at least 8 characters").matches(passwordRules, { message: "Please create a stronger password" }).required("Required"),
    confirmPasswords: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
});



export default basicSchema;
