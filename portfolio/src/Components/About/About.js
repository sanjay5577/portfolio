import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img2_enhanced.jpeg";
import innovation_img from "../../assets/innovation_emoji.png";
import growth_img from "../../assets/growth_image.png";
import excited_img from "../../assets/excited-emoji.png";
import mindset_img from "../../assets/mindset_emoji.jpg";
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
              Hi! <span>I'm SANJAY R,</span> a passionate Software Engineer with a strong
              foundation in Frontend development, complemented by backend
              expertise. Currently working at Accenture, I thrive on innovation
              and enjoy creating exciting new solutions.
              <img
                className="about-emoji"
                src={excited_img}
                alt="excited-emoji"
              />
            </p>
            <p>
              As a tech enthusiast, I constantly explore the latest technologies
              and trends, ensuring I stay ahead in the field. My problem-solving
              mindset
              <img
                className="about-emoji"
                src={mindset_img}
                alt="mindset-emoji"
              />{" "}
              and active GitHub profile reflect my dedication to collaborative,
              cutting-edge coding and innovative experiences.
              <img
                className="about-emoji"
                src={innovation_img}
                alt="innovation-emoji"
              />
            </p>

            <p>
              I'm eager to take on challenging roles that combine my skills in
              Software Engineering, offering opportunities for professional
              development, and personal growth. 🚀{" "}
              <img
                className="about-emoji"
                src={growth_img}
                alt="growth-emoji"
              />
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
