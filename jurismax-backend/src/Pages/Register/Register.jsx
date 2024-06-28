import React, { useState } from "react";
import "./register.css";
import { CiUser } from "react-icons/ci";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import { registerformValidation } from "../../utils/formValidation";

const Register = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [showpassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setTimeout(() => {
      const result = registerformValidation(
        username,
        phoneNumber,
        password,
        confirmPassword
      );
      setError(result);
    }, 3000);
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              className={`${error.username && "error"}`}
              type="text"
              id="name"
              value={username}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              htmlFor="name"
              className={
                username.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Name
            </label>
          </div>
          {error.username && <span>{error.username}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              className={`${error.phonenumber && "error"}`}
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label
              htmlFor="phoneNumber"
              className={
                phoneNumber.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Phone Number
            </label>
          </div>
          {error.phonenumber && <span>{error.phonenumber}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              value={password}
              autoComplete="off"
              className={`${error.password && "error"}`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              className={
                password.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              password
            </label>
            <div
              className="showpassword"
              onClick={() => setShowPassword(!showpassword)}
            >
              {showpassword ? (
                <BsEye className="showIcon" />
              ) : (
                <BsEyeSlash className="showIcon" />
              )}
            </div>
          </div>
          {error.password && <span>{error.password}</span>}
        </div>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type={showpassword ? "text" : "password"}
              id="confirmPassword"
              autoComplete="off"
              value={confirmPassword}
              className={`${error.confirmpassword && "error"}`}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label
              htmlFor="confirmPassword"
              className={
                confirmPassword.length > 0 ? "validPlaceHolder" : "placeHolder"
              }
            >
              Confirm Password
            </label>
          </div>
          {error.confirmpassword && <span>{error.confirmpassword}</span>}
        </div>
        <div className="terms">
          <p>
            By registering your account, you accept{" "}
            <a href="">Terms and Conditions </a>of the site.
          </p>
        </div>
        <input type="submit" value="Register" className="button_log" />
      </form>
    </div>
  );
};

export default Register;
