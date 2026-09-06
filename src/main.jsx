import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = ["cybersecurity", "data privacy", "threat assessment", "governance, risk, and compliance"];

const education = [
  {
    title: "de la salle university manila / network and information security",
    meta: "2022 - present | taft avenue, manila",
  },
  {
    title: "don bosco technical institute makati / primary, secondary, senior high",
    meta: "2011 - 2022 | chino roces avenue, makati",
  },
];

const experience = [
  ["information security organization / assistant vice president for research and training", "jan 2025 - aug 2025"],
  ["computer studies government / executive for external relations", "jan 2024 - aug 2024"],
  ["prodigy infotech (india) / internship trainee", "may 2024 - jun 2024"],
  ["dbti makati swim team / member", "2016 - 2020"],
];

const projects = [
  {
    title: "academic project / api-based network threat visualizer application",
    meta: "2025  |  lead developer",
    body: "a threat intelligence application native on python that acquires data from APIs and visualizes key information such as related threat networks, malicious detections, and network origin.",
    link: "#",
  },
  {
    title: "academic project / machine learning facial emotion recognition application",
    meta: "2025  |  lead developer",
    body: "a python project that uses machine learning to detect realtime facial emotions such as anger, happiness, sadness, disgust, and neutral.",
    link: "#",
  },
  {
    title: "classified company / enterprise resource planning application",
    meta: "2024  |  lead developer  /  ux designer",
    body: "a web application run on html, js, and sql that is a logistic and resource logging system.",
    link: "#",
  },
];

const achievements = [
  ["ibm / cybersecurity fundamentals", "jan 2026"],
  ["ibm / getting started with cybersecurity", "jan 2026"],
  ["alibaba cloud / ai compute services fostering infrastructure and platform facilities", "oct 2025 - expires oct 2027"],
  ["cyber5w / c5w-100", "jan 2025"],
  ["cisco / introduction to cybersecurity", "may 2024"],
  ["cisco / introduction to packet tracer", "may 2024"],
  ["dbti makati / best paper presenter", "jun 2022"],
  ["dbti makati / best in research award", "jun 2022"],
];

const interests = ["others", "dean’s lister", "hs academic awardee with honors"];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function SectionNav() {
  const items = [
    ["education", "🎓"],
    ["experience", "💼"],
    ["works", "✚"],
    ["achievements", "🏅"],
    ["interests", "✎"],
  ];
  return (
    <nav className="section-nav" aria-label="Portfolio sections">
      {items.map(([label, icon]) => (
        <a href={`#${label}`} key={label}>
          {label} <span>{icon}</span>
        </a>
      ))}
    </nav>
  );
}

function App() {
  return (
    <main>
      <section className="hero shell">
        <div className="profile-frame">
          <div className="profile-placeholder">
            <img src="public/pic.png" alt="Aaron Abaniel"/>
          </div>
        </div>

        <div className="intro">
          <div className="eyebrow">hi, my name is:</div>
          <h1>aaron abaniel</h1>
          <p className="tagline">lifelong learner, flexible, tenacious</p>
          <div className="contact-row">
            <div className="links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">github</a>
            </div>
            <a className="email" href="mailto:aaronabaniel@gmail.com">aaronabaniel@gmail.com</a>
          </div>
        </div>

        <div className="skills">
          <span className="skills-label">experienced in:</span>
          <div className="tech-icons">
            <span title="Python">python</span>
            <span title="C">c</span>
            <span title="C++">c++</span>
            <span title="Assembly">asm</span>
            <span title="Ruby">ruby</span>
            <span title="Java">java</span>
            <span title="Javascript">javascript</span>
          </div>
        </div>

        <div className="pill-row">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>

        <div className="language-row">
          <span>🌐</span>
          <span>english</span>
          <span>tagalog</span>
        </div>

        <blockquote>“A jack of all trades is a master of none, but oftentimes better than a master of one”</blockquote>
      </section>

      <section className="shell">
        <SectionNav />

        <section id="education" className="content-section">
          <Icon>🎓</Icon>
          {education.map(({ title, meta }) => (
            <article className="entry" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

        <section id="experience" className="content-section">
          <Icon>💼</Icon>
          {experience.map(([title, meta]) => (
            <article className="entry compact" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

        <section id="works" className="content-section">
          <Icon>✚</Icon>
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <h2>{project.title}</h2>
              <p className="meta">{project.meta}</p>
              <p>{project.body}</p>
              <a href={project.link}>link</a>
            </article>
          ))}
        </section>

        <div className="subnav">
          <span>others</span>
          <span className="active-marker"></span>
          <span>whitehat hacking</span>
          <span>threat assessment</span>
          <span>infrastructure cabling</span>
        </div>

        <section id="achievements" className="content-section achievements">
          <Icon>🏅</Icon>
          {achievements.map(([title, meta]) => (
            <article className="entry compact" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

        <div id="interests" className="subnav bottom">
          {interests.map((interest, index) => (
            <span key={interest} className={index === 1 ? "active-interest" : ""}>{interest}</span>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <span>© {new Date().getFullYear()} aaron abaniel</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
createRoot(document.getElementById("root")).render(<App />);
