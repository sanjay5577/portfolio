
import React from "react";
import "./Experience.css"; // We'll define CSS styles here
import theme_pattern from "../../assets/theme_pattern.svg"
import accenture_logo from "../../assets/Accenture_Logo_PNG_(1).png"


const Experience = () => {

  return (
    <div id='experience'className="experience-container">
      <div className='myexperience-title'>
               <h1>My Experience</h1>
               <img src={theme_pattern} alt=""/>
        </div>

      <div className="cards">
          <div className="card-content">
            <div className="row">

                <a href="https://www.accenture.com/in-en" target="_blank" rel="noreferrer noopener"><img alt="accenture logo"
                    src={accenture_logo} className="companylogo" />
                </a>
                <p>
                  <span className="card-title"><a href="https://www.accenture.com/in-en" target="_blank"
                      className="teal-text hoverline" rel="noreferrer noopener">Accenture</a></span>
                </p>

                <span className="role brown-text text-darken-2">Software Engineer</span>
            </div>

           
            
            <ul>
              <li>
                Developed and managed the backend of an e-commerce platform using Flask, MongoDB, and AWS.
              </li>
              <li>
                Worked on three web applications targeting customers, selling vendors, and admin users; built 50+ RESTful APIs with functionalities
                such as login/sign up, view a product, add a product to cart, checkout the order, etc.
              </li>
              <li>Improved the response time by 20% by refactoring the codebase and changing database design and queries.</li>
              <li>Added a bulk upload feature which reduced the manual work of adding products into a database.</li>
              <li>
                <b>Tools:</b> Python, Flask, MongoDB
              </li>
            </ul>
          
          <div className="card-action">
            <span>July 2020 - Nov 2020 | Hyderabad, India</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
