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
  {
    title: "information security organization / assistant vice president for research and training",
    period: "jan 2025 - aug 2025",
    story:
      "Translated academic research into practical training programs: designed and deployed a compact lab environment simulating real-world incidents, mentored interns through structured exercises, and presented evidence-backed findings to leadership to inform updated policies and training materials."
  },
  {
    title: "computer studies government / executive for external relations",
    period: "jan 2024 - aug 2024",
    story:
      "Distilled complex technical analysis into decision-ready briefings: prepared executive summaries and visualizations, coordinated cross-functional workshops, and communicated engineering trade-offs to non-technical stakeholders during a high-stakes rollout."
  },
  {
    title: "prodigy infotech (india) / internship trainee",
    period: "may 2024 - jun 2024",
    story:
      "Implemented automation that reduced manual monitoring effort, contributed code to production pipelines, and collaborated with senior engineers to deliver incremental improvements under tight timelines."
  },
  {
    title: "dbti makati swim team / member",
    period: "2016 - 2020",
    story:
      "Developed discipline and teamwork through competitive swimming: cultivated a practice-first mindset, supported teammates during competitions, and demonstrated consistent performance under pressure."
  },
];

const projects = [
  {
    title: "academic thesis / exploratory data analysis of an network intrusion detection system dataset",
    period: "2026  |  main proponent/developer",
    story:
      "Performed exploratory analysis of a network intrusion dataset using Jupyter notebooks: cleaned and visualized large-scale telemetry, engineered features for model training, and evaluated classical and deep learning approaches to surface actionable patterns and research directions.",
      link: "https://github.com/aabaniel/ZeekData24-AI-Training",
      thumbnail: "/images/thesis.svg",
  },
  {
    title: "academic project / api-based network threat visualizer application",
    period: "2025  |  lead developer",
    story:
      "Led development of an API-driven threat visualizer that aggregates telemetry from multiple sources, maps related indicators, and presents concise visual stories to accelerate investigation and decision-making.",
      link: "https://github.com/aabaniel/ThreatViz_V2",
      thumbnail: "/images/threat_visualizer.svg",
  },
  {
    title: "academic project / machine learning facial emotion recognition application",
    period: "2025  |  lead developer",
    story:
      "Led design of a realtime ML pipeline for facial emotion recognition: iterated on model architectures and preprocessing to balance accuracy and latency, and delivered prototypes for user testing and performance tuning.",
      link: "https://github.com/shadowblade58/maclrn-facial",
      thumbnail: "/images/facial_ml.svg",
  },
  {
    title: "classified company / enterprise resource planning application",
    period: "2024  |  lead developer  /  ux designer",
    story:
      "Designed and shipped core ERP features spanning UX flows to backend integrations, prioritized reliability and operator efficiency, and collaborated with stakeholders to iterate on practical workflows.",
      link: "#",
      thumbnail: "/images/erp_app.svg",
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

const interests = ["others", "dean’s lister", "academic awardee with honors"];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function SectionNav() {
  const items = [
    ["education"],
    ["experience"],
    ["works"],
    ["achievements"],
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
        <div className="hero-top">
          <div className="profile-frame">
            <div className="profile-placeholder">
              <img src="/pic.png" alt="Aaron Abaniel"/>
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
        </div>
        <div className="experience-title">
          <span>experience</span>
        </div>
        <div className="skills">
          <div className="tech-icons">
            <span title="Python">python</span>
            <span title="C">c</span>
            <span title="C++">c++</span>
            <span title="Java">java</span>
            <span title="Javascript">javascript</span>
          </div>
        </div>

        <div className="subnav">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>

        <div className="experience-title">
          <span>languages</span>
        </div>
        <div className="language-row">
          <span>english</span>
          <span>tagalog</span>
        </div>

        <blockquote>“A jack of all trades is a master of none, but oftentimes better than a master of one”</blockquote>
      </section>

      <section className="shell">
        <SectionNav />

        <section id="education" className="content-section">
          <Icon>education</Icon>
          {education.map(({ title, meta }) => (
            <article className="entry" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

        <section id="experience" className="content-section">
          <Icon>experience</Icon>
          {experience.map(({ title, period, story }) => (
            <article className="entry compact" key={title}>
              <h2>{title}</h2>
              <p className="meta">{period}</p>
              <p>{story}</p>
            </article>
          ))}
        </section>

        <section id="works" className="content-section">
          <Icon>works</Icon>
          {projects.map(({ title, period, story, link, thumbnail }, idx) => (
            <article className={`project ${idx % 2 === 1 ? 'alt' : ''}`} key={title}>
              {thumbnail && (
                <img src={thumbnail} alt={`${title} thumbnail`} className="project-thumb" />
              )}
              <div className="project-header">
                <h2>{title}</h2>
                <p className="meta">{period}</p>
              </div>
              <p>{story}</p>
              {link && link !== "#" && (
                <a href={link} target="_blank" rel="noreferrer">link</a>
              )}
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
          <Icon>achievements</Icon>
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
        <span>{new Date().getFullYear()} aaron abaniel</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
createRoot(document.getElementById("root")).render(<App />);
