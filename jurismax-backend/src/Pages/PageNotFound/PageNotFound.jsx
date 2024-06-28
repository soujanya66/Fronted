import React from "react";
import "./pagenotfound.css";

import pageIMG from "../../assets/404.svg";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="pageNotFoundContainer">
      <div className="pageChild">
        <img src={pageIMG} alt="" />
        <h1>PAGE NOT FOUND</h1>
        <Link to="/">
          <button className="pageNot_button">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
