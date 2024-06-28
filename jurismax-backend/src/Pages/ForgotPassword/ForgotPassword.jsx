import React, { useState } from "react";
import "./forgotpassword.css";
import { loginformValidation } from "../../utils/formValidation";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const fetchResetPassword = () => {
    loginformValidation(email);
  };
  return (
    <div className="forgotPasContianer">
      <form>
        <h2>Reset password</h2>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={fetchResetPassword}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
