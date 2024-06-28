import React from "react";
import headerImg from "../../assets/searchtwo.jpeg";
import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftContainer">
        <div className="left">
          <div className="imgContainer">
            <img src={headerImg} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="textContainer">
            <h1>TITLE INVESTIGATION</h1>
            <p>
              "PROPERTY EVALUATION" BY THE EXPERT CIVIL ADVOCATES BEFORE YOU BUY
              THE PROPERTY IS VERY CRUCIAL AND HIS / HER OPINION ON PROPERTY
              DOCUMENTS GIVES THE COMPLETE PICTURE / BACKGROUND OF THE PROPERTY.
              A GOOD OPINION CAN PREDICT THE FUTURE RISK OF A PROPERTY WHICH
              HELPS THE INVESTOR TO PROCEED FURTHER.
            </p>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <h2>FRAUDSTERS ARE EVERYWHERE</h2>
        <p>
          JUST HAVE A DETAILED PROPERTY REPORT BEFORE YOU ENTER INTO ANY
          PROPERTY TRANSACTION BY JUST ONE CLICK AWAY.
        </p>
        <div className="button_book">BOOK YOUR SERVICE</div>
      </div>
    </div>
  );
};

export default Header;
