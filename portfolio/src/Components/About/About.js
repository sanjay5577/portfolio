import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img2_enhanced.jpeg";
import techstack_data from "../../assets/techstack_data";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="themepattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi! My name is SANJAY R. I am a passionate developer having
              experience in Frontend development complemented by backend
              expertise and I'm currently working at Accenture as a Software
              Engineer. I am much interested in developing new things which
              excite me a lot. :)
            </p>
            <p>
              I love exploring new technologies and being a practitioner, I like
              to stay on top of latest trends. My problem-solving mindset and
              active GitHub profile showcase my commitment to innovative and
              collaborative coding.
            </p>

            <p>
              Looking for an opportunity to work in a challenging position
              combining my skills in Software Engineering, which provides
              professional development, interesting experiences and personal
              growth.
            </p>
          </div>
        </div>
      </div>

      <div className="teck-stack">
        <h1>My Teck Stack</h1>
        <div className="teck-stack-container">
          {techstack_data.map((data) => (
            <div key={data.ts_no} className="tech-stack-indi-box">
              <div className="stacklogo-box">
                <img
                  src={data.ts_img}
                  alt="stacklogo"
                  className="ts-logo-img"
                />
              </div>

              <p>{data.ts_name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1> 3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1> 10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
