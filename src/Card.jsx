import React from "react";
import picture from "./assets/Rectangle 90.png";
import mail from "./assets/mail.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/Facebook Icon.svg";
import twitter from "./assets/Twitter Icon.svg";
import Github from "./assets/GitHub Icon.svg";
import instagram from "./assets/Instagram Icon.svg";
const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={picture} />
          <div className="information">
            <div className="detials">
              <p className="name">Laura Smith</p>
              <p className="job">Frontend Developer</p>
              <p className="website">laurasmith.website</p>
            </div>
          </div>
          <div className="btns">
            <button className="btn-mail">
              <img src={mail} /> Email
            </button>
            <button className="btn-linkedin">
              <img src={linkedin} /> LinkedIn
            </button>
          </div>
          <div className="desc">
            <div className="About_interest">
              <p className="about">About</p>
              <p className="❤">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </p>
            </div>
            <div>
              <p className="About_interest">Interests</p>
              <p className="❤">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <img src={twitter} />
          <img src={facebook} />
          <img src={instagram} />
          <img src={Github} />
        </div>
      </footer>
    </>
  );
};
export default Card;
