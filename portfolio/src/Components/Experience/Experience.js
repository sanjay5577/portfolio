
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
              Built the frontend for an automation tool called Alias Executor, where users can import projects and execute text scripts with configurable threads and delays. The tool also displays the execution results for user review.
              </li>
              <li>
              Increased the Automation Coverage from 40% to 65% which helped to capture bugs during enhancements.
              </li>
              <li>Covered 100% manual scenarios with automation that decreased regression time from 5 days to 2 days</li>
              <li>Performed Regression, Smoke, API Testing on daily basis for NodeJs Microservices Migration Project which
resulted in robust and scalable solution which reduced time consumption by 25%.</li>
              <li>
                <li>Awarded as ”Cool Collaborator” for NodeJs Microservices Migration</li>
                <span className="experience-tools"><br/><b>Tools:</b> React, Node, MongoDB </span>
              </li>
            </ul>
          
          <div className="card-action">
            <span>Oct 2021 - Sep 2024 | Bengaluru, India</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
