const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z]{3}[a-zA-Z0-9]{1,5}/;

const phoneNumberRegex = /^[0-9]{10,14}$/;

export const registerformValidation = (
  username,
  phonenumber,
  password,
  confirmPassword
) => {
  const formError = {};
  // username Validation
  if (username === "") {
    formError.username = "Username is required !";
  } else if (!usernameRegex.test(username)) {
    formError.username =
      "Username should be 4 to 8 characters , start with min 3 alphabates , no special characters allowed !";
  } else {
    formError.username = "";
  }
  // phone validation
  if (phonenumber === "") {
    formError.phonenumber = "Phone number is required !";
  } else if (!phoneNumberRegex.test(phonenumber)) {
    formError.phonenumber = "Please enter a valid phone number !";
  } else {
    formError.phonenumber = "";
  }
  // email Validation

  //   if (email === "") {
  //     formError.email = "Email is required";
  //   } else if (!emailRegex.test(email)) {
  //     formError.email = "Please enter a valid email";
  //   } else {
  //     formError.email = "";
  //   }

  // password Validation

  if (password === "") {
    formError.password = "Password is required !";
  } else if (!passwordRegex.test(password)) {
    formError.password =
      " Password should be at least 8 characters, 1 uppercase , 1 lowercase, 1 digit and 1 special character !";
  } else {
    formError.password = "";
  }

  //confirm password Validation

  if (confirmPassword === "") {
    formError.confirmpassword = "Please confirm your password !";
  } else if (confirmPassword !== password) {
    formError.confirmpassword = " Password not match !";
  } else {
    formError.confirmpassword = "";
  }
  return formError;
};

export const loginformValidation = (phonenumber, password) => {
  const formError = {};
  if (phonenumber === "") {
    formError.phonenumber = "Phone number is required !";
  } else if (!phoneNumberRegex.test(phonenumber)) {
    formError.phonenumber = "Please enter a valid phone number !";
  } else {
    formError.phonenumber = "";
  }

  if (password === "") {
    formError.password = "Password is required !";
  } else {
    formError.password = "";
  }
  return formError;
};
