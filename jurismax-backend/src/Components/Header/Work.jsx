import React from "react";
import "./work.css";
import img1 from "../../assets/howwedo.jpeg";
import img2 from "../../assets/service.jpeg";
const Work = () => {
  return (
    <div className="workContainer">
      <h2>HOW WE WORK</h2>
      <div className="workSubContainer">
        <div className="workSubContainer_left">
          <div className="top">
            <div className="cardContainer">
              <h3>Get Started</h3>
              <p>
                Submit Your Properties Documents Via Email, Whatsapp To Our
                Excecutive !
              </p>
              <div className="button_book">Book Your Service</div>
            </div>
            <img src={img1} alt="" />
          </div>
          <div className="bottom">
            <div className="cardContainer">
              <h3>Get Reported</h3>
              <p>
                Our Legal Experts Scrutinize Your Documents Carefully And
                Prepare A Detailed Report Within Days And Get Back To You
              </p>
              <div className="button_book">Book Your Service</div>
            </div>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="workSubContainer_right">
          <form>
            <h2>Quick Enquiry</h2>
            <div className="inputContainer">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <div className="button_book">Submit</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Work;
