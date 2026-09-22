import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


////////////////////////////////////////////////////////////////////////////////////////

//                                    DATA SECTION

////////////////////////////////////////////////////////////////////////////////////////

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
    title: "mini-hackation / track and optimizization of daily time budget web application ",
    period: "2026  |  developer / ux designer",
    story:
      "won 2nd place overall by building and deploying a vercel-hosted time-management app, cutting development time by 40% using claude code with deepseek flash for rapid prototyping, real-time tracking, and automated ci/cd.",
      link: "https://github.com/aabaniel/CCM-App-TeamNieric",
      thumbnail: "/images/budget.gif",
      tags: ["javascript", "react", "vercel", "claude code"],
  },

  {
    title: "academic thesis / exploratory data analysis of an network intrusion detection system dataset",
    period: "2026  |  main proponent/developer",
    story:
      "performed exploratory analysis of a network intrusion dataset using jupyter notebooks: cleaned and visualized large-scale data, engineered features for model training, and evaluated classical and deep learning approaches to surface actionable patterns and research directions.",
      link: "https://github.com/aabaniel/ZeekData24-AI-Training",
      thumbnail: "/images/Thesis.png",
      tags: ["python", "jupyter", "pytorch", "tensorflow", "preprocessing", "model training", "deep learning", "machine learning"],
  },
  {
    title: "concurrent syslog analytics server",
    period: "2025 | developer",
    story:
      "this project is a distributed log analytics system designed for scalability and reliability in processing large log data. utilizing a decoupled system architecture, the system uses rabbitmq, docker compose, and mongodb as its main middlewares. rabbitmq is used for inter-process communication, mongodb’s sharded cluster is used for data storage, then docker’s compose is used for a plug-and-play-style system for quick and seamless feel. key mechanisms, including distributed locking and error handling, address challenges in concurrency and synchronization. ",
    link: "#",
    thumbnail: "/images/splanky.png",
    tags: ["python", "javascript", "rabbitmq", "docker compose", "mongodb", "networking", "concurrency", "distributed systems"],
  },
  {
    title: "ThreatViz / api-based network threat visualizer application",
    period: "2025  |  lead developer",
    story:
      "led development of an api-driven threat visualizer that aggregates telemetry from multiple sources, maps related indicators, and presents concise visual stories to accelerate investigation and decision-making.",
      link: "https://github.com/aabaniel/ThreatViz_V2",
      thumbnail: "/images/threat.gif",
      tags: ["python", "fastapi", "virus total", "abuseipdb", "alienvaultotx", "matpltlib"],
  },
  {
    title: "academic project / machine learning facial emotion recognition application",
    period: "2025  |  lead developer",
    story:
      "led design of a realtime ml pipeline for facial emotion recognition: iterated on model architectures and preprocessing to balance accuracy and latency, and delivered prototypes for user testing and performance tuning.",
      link: "https://github.com/shadowblade58/maclrn-facial",
      tags: ["jupyter", "python", "sklearn", "kaggle", "davilsena/ckdataset"],
      thumbnail: "/images/facial_ml.png",
  },
  {
    title: "classified company / enterprise resource planning application",
    period: "2024  |  lead developer  /  ux designer",
    story:
      "designed and shipped core erp features spanning ux flows to backend integrations, prioritized reliability and operator efficiency, and collaborated with stakeholders to iterate on practical workflows.",
      tags: ["html", "javascript", "css", "figma"],
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

////////////////////////////////////////////////////////////////////////////////////////

//                                    LAYOUT SECTION

////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const [emailNotice, setEmailNotice] = React.useState("");
  const bubbles = React.useMemo(
    () => [
      { left: "8%", size: 7, duration: "9s", delay: "0s" },
      { left: "18%", size: 11, duration: "12s", delay: "1.5s" },
      { left: "31%", size: 6, duration: "10s", delay: "0.8s" },
      { left: "46%", size: 12, duration: "13s", delay: "2.2s" },
      { left: "59%", size: 8, duration: "11s", delay: "0.4s" },
      { left: "74%", size: 10, duration: "12s", delay: "1.1s" },
      { left: "88%", size: 7, duration: "9.5s", delay: "2.8s" },
    ],
    []
  );

  const handleEmailCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("aaronabaniel@gmail.com");
      setEmailNotice("Email copied to clipboard");
    } catch {
      setEmailNotice("Copy failed");
    }

    if (handleEmailCopy.timeoutId) {
      window.clearTimeout(handleEmailCopy.timeoutId);
    }
    handleEmailCopy.timeoutId = window.setTimeout(() => setEmailNotice(""), 2500);
  };

  return (
    <main style={{ position: "relative", zIndex: 0 }}>
      <style>{`
        @keyframes underwaterDrift {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-24px); }
        }
        @keyframes bubbleRise {
          0% { transform: translate3d(0, 0, 0); opacity: 0; }
          12% { opacity: .45; }
          100% { transform: translate3d(-8px, -110vh, 0); opacity: 0; }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(1920px 1080px at 50% 120%, rgba(27,79,113,.45), transparent 65%), linear-gradient(180deg, #12314a 0%, #0f2738 45%, #0b1f2d 100%)",
          //animation: "underwaterDrift 9s ease-in-out infinite alternate",
        }}
      >
        {bubbles.map((bubble, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              bottom: "-8%",
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderRadius: "999px",
              background: "rgba(210, 240, 255, 0.35)",
              boxShadow: "0 0 8px rgba(210, 240, 255, 0.25)",
              animation: `bubbleRise ${bubble.duration} linear ${bubble.delay} infinite`,
            }}
          ></span>
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: "transparent",
        }}
      />
      {emailNotice && (
        <div
          className="in-body-notification subnav"
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            padding: "0.75rem",
            color: "#111", // dark font color
            zIndex: 9999,
          }}
        >
          {emailNotice}
        </div>
      )}
      <section className="hero shell">
        <div className="hero-top">
          <div className="intro">
            <div className="eyebrow">hi, my name is:</div>
            <h1>aaron abaniel</h1>
            <p className="tagline">computer science majoring in network and information security // de la salle manila</p>
            <div className="contact-row">
              <div className="links">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">github</a>
              </div>
              <a
                className="email"
                href="mailto:aaronabaniel@gmail.com"
                onClick={handleEmailCopy}
              >
                aaronabaniel@gmail.com
              </a>
            </div>
          </div>
        </div>
  

        <div className="experience-title">
          <span>languages</span>
        </div>
        <div className="language-row">
          <span>english</span>
          <span>tagalog</span>
        </div>

        <blockquote>im a cybersecurity student who blah blah blah blah </blockquote>
        <p className="tagline">interested with iot and marine biology? i'd love to talk!</p>

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
          {projects.map(({ title, period, story, link, thumbnail, tags }) => {
            const isClosedSource = link === "#";
            const hasThumbnail = !!thumbnail;
            return (
              <article className={`project ${!hasThumbnail ? 'placeholder' : ''}`} key={title}>
                <header className="project-card-header">
                  <div className="project-title-block">
                    <h2>{title}</h2>
                    <p className="meta">{period}</p>
                  </div>
                  <span className="project-badge">
                    {isClosedSource ? "closed source" : "open source"}
                  </span>
                </header>

                {hasThumbnail && (
                  <div className="project-banner">
                    <img src={thumbnail} alt={`${title} thumbnail`} className="project-thumb" />
                  </div>
                )}

                <p className="project-story">{story}</p>

                {tags && tags.length > 0 && (
                  <div className="project-tags">
                    {tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}

                {isClosedSource ? (
                  <p className="project-note">code available upon request</p>
                ) : (
                  <a className="project-link" href={link} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </article>
            );
          })}
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
