import React, { useEffect } from "react";
import profilePic from "../../images/saikot.png";
import "./About.css";
const About = () => {
  useEffect(() => {
    document.title = "About Me";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div className="container">
      <h1 className="text-warning text-center my-5">About Me</h1>
      <section className="d-flex justify-content-between align-items-center mb-5">
        <div className="w-50">
          <h1 className="text-white about-title">
            Hi, I'm <span className="text-warning">Saifullah Mansur</span>
          </h1>
          <p className="text-light">Front End Engineer based in Bangladesh ☀️. I describe myself as a passionate developer who loves open source, and the web platform ❤️.</p>
        </div>
        <img style={{ width: "325px" }} className="img-fluid" src={profilePic} alt="" />
      </section>
      <div>
        <h2 className="text-warning text-center mt-5 mb-3">My goals</h2>
        <article className="text-white mb-5">
          My Current goal is to finish <span className="text-warning">Complete Web Development Course With Jhankar Mahbub</span> couse with my hardwork and dedication and get a job in the top IT firms in bangladesh. After that, I want to prepare myself for <span className="text-warning">IELTS</span> exam. Beside that, I'll learn backend mechanism for <span className="text-warning">Full-Stack Development</span>. My future goal is to get a <span className="text-warning">remote job</span> or get hired as a Full-Stack developer in abroad.
        </article>
      </div>
      <div className="mb-5">
      <h2 className="text-warning text-center mt-5 mb-3">My Plans to achieve these goals</h2>
      <div className="text-white">
        <ul>
          <li>As I completed my <span className="text-warning">B.Sc graduation</span> recently, now I'm fully focused on the course.</li>
          <li>In the <span className="text-warning">upcoming 2 months</span>, I'll prepare myself as a Front-End developer.</li>
          <li>Then, I'll prepare myself for the <span className="text-warning">Job interviews</span>.</li>
          <li>Beside that, I'll prepare myself for <span className="text-warning">IELTS</span> exam and I'll learn the <span className="text-warning">Backend Mechanisms</span>.</li>
          <li>Meanwhile, I'll practice <span className="text-warning">problem solvings</span> in some websites.</li>
          <li>Finally, I know I'll execute my plans succesfully<span className="text-warning">(Insa allah)</span> with My hardwork and dedication.</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default About;
