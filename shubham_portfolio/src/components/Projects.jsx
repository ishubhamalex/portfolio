import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section-title">My Projects</h2>

      <div className="project-container">
        <div className="project-card glass-card">
          <h3>LeetMetric</h3>
          <p>
            Developed a web app to visualize LeetCode stats using API
            integration, featuring dynamic progress indicators and a responsive
            UI with JavaScript and CSS.
          </p>
          <p><strong>Tech Stack:</strong> HTML, CSS, JavaScript, API</p>
        </div>

        <div className="project-card glass-card">
          <h3>Pneumonia Detection using CNN</h3>
          <p>
            Built a deep learning model for pneumonia detection using CNN to
            analyze medical images and assist in identifying pneumonia cases.
          </p>
          <p><strong>Tech Stack:</strong> Python, CNN, Deep Learning</p>
        </div>

        <div className="project-card glass-card">
          <h3>Upcoming Project</h3>
          <p>
            This section is reserved for my next project. I will update it soon
            after completing the project.
          </p>
          <p><strong>Tech Stack:</strong> To be added</p>
        </div>
      </div>

      <h2 className="section-title">Achievements</h2>
      <div className="achievement-container">
        <div className="achievement-card glass-card">
          <p>4th Rank in Status Code 1 Hackathon (Hardware Section)</p>
        </div>
        <div className="achievement-card glass-card">
          <p>250+ DSA problems solved on LeetCode and GFG</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;