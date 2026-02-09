export const checkValidateData = (email, password, name) => {
  const error = { email: "", password: "", name: "" };
  const emailValidate = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const nameValidate = /^[a-zA-Z0-9_-]{3,16}$/.test(name);

  if (!emailValidate) {
    error.email = "Invalid email";
  }
  if (!passwordValidate) {
    error.password = "Invalid password";
  }
  if (!nameValidate) {
    error.name = "Invalid name";
  }
  return error;
};
