import React from "react";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="background-animation"></div>

      <div className="home-left">
        <p className="intro-tag">Welcome to my portfolio</p>
        <h1>Hello, I'm Shubham Gupta</h1>
        <h3>Frontend Developer | CSE Student</h3>
        <p>
          I’m Shubham Gupta, a Computer Science student at IIIT Kalyani and an
          aspiring frontend developer. I enjoy building modern, responsive, and
          user-friendly web applications using HTML, CSS, JavaScript, and React.
          Along with web development, I actively practice data structures and
          algorithms to strengthen my problem-solving skills.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn">
            View Projects
          </a>

          <a
            href="https://github.com/ishubhamalex"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/ishubhamalex_/"
            target="_blank"
            rel="noreferrer"
            className="btn leetcode-btn"
          >
            LeetCode
          </a>

          <a href="/resume.pdf" download className="btn resume-btn">
            Download Resume
          </a>
        </div>
      </div>

      <div className="home-right">
        <div className="profile-wrapper glass-card">
          <img src="/profile.jpg" alt="Shubham Gupta" className="profile-img" />
        </div>

        <div className="home-card glass-card">
          <h2>Skills</h2>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>C++</span>
            <span>DSA</span>
          </div>

          <h2>Education</h2>
          <ul className="education-list">
            <li>10th - 81.8%</li>
            <li>12th - 81.83%</li>
            <li>B.Tech (CSE) - 8.29 CGPA</li>
          </ul>

          <h2>Fields of Interest</h2>
          <div className="interest-list">
            <span>Cooking</span>
            <span>Driving</span>
            <span>Geopolitics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;