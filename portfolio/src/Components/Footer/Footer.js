import React from "react";
import "./Footer.css";
import github_logo from "../../assets/pngfind.com-github-logo-png-1766942.png";
import linkedin_logo from "../../assets/pngfind.com-linkedin-png-533561.png";
import instagram_logo from "../../assets/pngfind.com-instagram-png-white-2773517.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-right">
          <p>Visit my social profile and get connected</p>
          <div className="footer-connect">
            <a
              className="github-connect"
              href="https://github.com/sanjay5577"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={github_logo} className="sociallogo" alt="githublogo" />
              <span>GitHub</span>
            </a>
            <a
              className="linkedin-connect"
              href="https://www.linkedin.com/in/sanjay-r-97b151171"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={linkedin_logo}
                className="sociallogo"
                alt="linkedinlogo"
              />
              <span>LinkedIn</span>
            </a>

            <a
              className="instagram-connect"
              href="https://www.instagram.com/sanjay__57/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={instagram_logo}
                className="sociallogo"
                alt="instalogo"
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024.&nbsp; Designed by Sanjay R. &nbsp; All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
