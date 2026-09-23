import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


////////////////////////////////////////////////////////////////////////////////////////

//                                    DATA SECTION

////////////////////////////////////////////////////////////////////////////////////////

const education = [
  {
    title: "De La Salle University Manila / Network and Information Security",
    meta: "2022 - Present | Taft Avenue, Manila",
  },
  {
    title: "Don Bosco Technical Institute Makati / Primary, Secondary, Senior High",
    meta: "2011 - 2022 | Chino Roces Avenue, Makati",
  },
];

const experience = [
  {
    title: "Information Security Organization / Assistant Vice President for Research and Training",
    period: "Jan 2025 - Aug 2025",
    story:
      "Researched emerging cybersecurity technologies and threat intelligence to support organizational initiatives and organized technical workshops and training sessions to enhance members' cybersecurity knowledge and skills."
  },
  {
    title: "Computer Studies Government / Executive for External Relations",
    period: "Jan 2024 - Aug 2024",
    story:
      "Managed partnerships with student organizations, industry partners, and sponsors for college-wide events and coordinated logistics and technical operations for events serving over 2,000 College of Computer Studies students."
  },
  {
    title: "Prodigy Infotech (India) / Internship Trainee",
    period: "May 2024 - Jun 2024",
    story:
      "Conducted a deeper analysis into multiple key topics and programming best practices based on Cybersecurity."
  },
  {
    title: "DBTI Makati Swim Team / Member",
    period: "2016 - 2020",
    story:
      "Developed discipline and teamwork through competitive swimming: cultivated a practice-first mindset, supported teammates during competitions, and demonstrated consistent performance under pressure."
  },
];

const projects = [
    {
    title: "Mini-Hackathon / Track and Optimization of Daily Time Budget Web Application ",
    period: "2026  |  Developer / UX Designer",
    story:
      "Won 2nd place overall by building and deploying a Vercel-hosted time-management app, cutting development time by 40% using Claude Code with DeepSeek Flash for rapid prototyping, real-time tracking, and automated CI/CD.",
      link: "https://github.com/aabaniel/CCM-App-TeamNieric",
      thumbnail: "/images/budget.gif",
      tags: ["JavaScript", "React", "Vercel", "Claude Code"],
  },

  {
    title: "Academic Thesis / Exploratory Data Analysis of a Network Intrusion Detection System Dataset",
    period: "2026  |  Main Proponent/Developer",
    story:
      "Performed exploratory analysis of a network intrusion dataset using Jupyter Notebooks: cleaned and visualized large-scale data, engineered features for model training, and evaluated classical and deep learning approaches to surface actionable patterns and research directions.",
      link: "https://github.com/aabaniel/ZeekData24-AI-Training",
      thumbnail: "/images/Thesis.png",
      tags: ["Python", "Jupyter", "PyTorch", "TensorFlow", "Preprocessing", "Model Training", "Deep Learning", "Machine Learning"],
  },
  {
    title: "Concurrent Syslog Analytics Server",
    period: "2025 | Developer",
    story:
      "This project is a distributed log analytics system designed for scalability and reliability in processing large log data. Utilizing a decoupled system architecture, the system uses RabbitMQ, Docker Compose, and MongoDB as its main middleware. RabbitMQ is used for inter-process communication, MongoDB’s sharded cluster is used for data storage, and Docker Compose is used for a plug-and-play-style system for a quick and seamless feel. Key mechanisms, including distributed locking and error handling, address challenges in concurrency and synchronization. ",
    link: "#",
    thumbnail: "/images/splanky.png",
    tags: ["Python", "JavaScript", "RabbitMQ", "Docker Compose", "MongoDB", "Networking", "Concurrency", "Distributed Systems"],
  },
  {
    title: "ThreatViz / API-Based Network Threat Visualizer Application",
    period: "2025  |  Lead Developer",
    story:
      "Led development of an API-driven threat visualizer that aggregates telemetry from multiple sources, maps related indicators, and presents concise visual stories to accelerate investigation and decision-making.",
      link: "https://github.com/aabaniel/ThreatViz_V2",
      thumbnail: "/images/threat.gif",
      tags: ["Python", "FastAPI", "VirusTotal", "AbuseIPDB", "AlienVault OTX", "Matplotlib"],
  },
  {
    title: "Academic Project / Machine Learning Facial Emotion Classification Application",
    period: "2025  |  Lead Developer",
    story:
      "Led design of a real-time ML pipeline for facial emotion classification: iterated on model architectures and preprocessing to balance accuracy and latency, and delivered prototypes for user testing and performance tuning.",
      link: "https://github.com/shadowblade58/maclrn-facial",
      tags: ["Jupyter", "Python", "scikit-learn", "Kaggle", "davilsena/ckdataset"],
      thumbnail: "/images/facial_ml.png",
  },
  {
    title: "Classified Company / Enterprise Resource Planning Application",
    period: "2024  |  Lead Developer  /  UX Designer",
    story:
      "Designed and shipped core ERP features spanning UX flows to backend integrations, prioritized reliability and operator efficiency, and collaborated with stakeholders to iterate on practical workflows.",
      tags: ["HTML", "JavaScript", "CSS", "Figma"],
      link: "#",

  },
];

const achievements = [
  ["IBM / Cybersecurity Fundamentals", "Jan 2026"],
  ["IBM / Getting Started with Cybersecurity", "Jan 2026"],
  ["Alibaba Cloud / AI Compute Services Fostering Infrastructure and Platform Facilities", "Oct 2025 - Expires Oct 2027"],
  ["Cyber5W / C5W-100", "Jan 2025"],
  ["Cisco / Introduction to Cybersecurity", "May 2024"],
  ["Cisco / Introduction to Packet Tracer", "May 2024"],
  ["DBTI Makati / Best Paper Presenter", "Jun 2022"],
  ["DBTI Makati / Best in Research Award", "Jun 2022"],
];

const interests = ["Others", "Dean’s Lister", "Academic Awardee with Honors"];

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
          {label.charAt(0).toUpperCase() + label.slice(1)} <span>{icon}</span>
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
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(18,49,74,.98) 10%, rgba(15,39,56,.8) 60%, rgba(15,39,56,.88) 70%, rgba(11,31,45,.98) 90%, rgba(11,31,45,.98) 100%), url('/bkgrd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
            <div className="eyebrow">Hi, my name is:</div>
            <h1>Aaron Abaniel</h1>
            <p className="tagline">Computer Science major in Network and Information Security // De La Salle Manila</p>
          </div>
        </div>
  

        <div className="experience-title">
          <span>Languages</span>
        </div>
        <div className="language-row">
          <span>English</span>
          <span>Tagalog</span>
        </div>

        <blockquote>A cybersecurity student who blah blah blah blah </blockquote>
        <p className="tagline">Interested in IoT and marine biology? I'd love to talk!</p>
          <a
                className="email"
                href="mailto:aaronabaniel@gmail.com"
                onClick={handleEmailCopy}
                >aaronabaniel [at] gmail (dot) com</a>

      </section>

      <section className="shell">
        <SectionNav />

        <section id="education" className="content-section">
          <Icon>Education</Icon>
          {education.map(({ title, meta }) => (
            <article className="entry" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

        <section id="experience" className="content-section">
          <Icon>Experience</Icon>
          {experience.map(({ title, period, story }) => (
            <article className="entry compact" key={title}>
              <h2>{title}</h2>
              <p className="meta">{period}</p>
              <p>{story}</p>
            </article>
          ))}
        </section>

        <section id="works" className="content-section">
          <Icon>Works</Icon>
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
                    {isClosedSource ? "Closed Source" : "Open Source"}
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
                  <p className="project-note">Code available upon request</p>
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
          <span>Others</span>
          <span className="active-marker"></span>
          <span>White-Hat Hacking</span>
          <span>Threat Assessment</span>
          <span>Infrastructure Cabling</span>
        </div>

        <section id="achievements" className="content-section achievements">
          <Icon>Achievements</Icon>
          {achievements.map(([title, meta]) => (
            <article className="entry compact" key={title}>
              <h2>{title}</h2>
              <p>{meta}</p>
            </article>
          ))}
        </section>

       
      </section>

      <footer className="footer shell">
        <span>{new Date().getFullYear()} Aaron Abaniel</span>
        <span className="image-credit">Background image by Marek Okon</span>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
createRoot(document.getElementById("root")).render(<App />);
