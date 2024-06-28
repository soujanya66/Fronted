import React, { useState } from "react";
import { loginformValidation } from "../../utils/formValidation";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [showpassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginformValidation(phoneNumber, password);
    setError(result);
  };
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              autoComplete="off"
              className={`${error.phonenumber && "error"}`}
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
              className={`${error.password && "error"}`}
              autoComplete="off"
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
        <div className="forgotAndReg">
          <p className="forgot">
            <a href="/forgot" target="_blank">
              Forgot password ?{" "}
            </a>
          </p>
          <p>
            Not have an account ?<Link to={"/register"}>Register</Link>
          </p>
        </div>
        <input type="submit" value="Login" className="button_log" />
      </form>
    </div>
  );
};

export default Login;
