import React, { useState } from "react";
import "./App.css";

type Project = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "MovieTalk English Platform",
    role: "Full-stack development",
    description:
      "Learning platform where users improve English by watching real movies and series. Custom admin panel, episode management, watch-progress, and vocabulary tools.",
    tech: ["React", "TypeScript", "Vite", "FastAPI", "MySQL"],
    github: "#",
    link: "#",
  },
  {
    title: "TOEFL Practice Simulator",
    role: "Frontend architecture",
    description:
      "SPA for TOEFL practice with reading, listening, speaking, and writing sections, timers, scoring logic, and detailed analytics.",
    tech: ["React", "TypeScript", "SPA architecture"],
    github: "#",
  },
  {
    title: "Modern Business Website",
    role: "Full-stack + deployment",
    description:
      "Corporate website for a small business with CMS-like admin area, SEO optimization, and fast loading on both mobile and desktop.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    github: "#",
  },
];

const skills = {
  frontend: [
    "React + TypeScript",
    "Java Script",
    "Vite / SPA architecture",
    "Modern CSS / Flex / Grid",
    "Responsive UI & UX",
    "Form handling & validation",
  ],
  backend: [
    "Python + FastAPI",
    "REST API design",
    "Authentication & JWT",
    "Relational DB (MySQL / PostgreSQL)",
    "Basic deployment (VPS / Docker)",
    "Integrated AI",
  ],
  extra: [
    "Git & GitHub",
    "Working with designers / Figma",
    "Clear communication",
    "English / Russian / Armenian",
  ],
};

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  return (
    <div className="pf-page">
      {/* Floating background blobs */}
      <div className="pf-blob pf-blob-1" />
      <div className="pf-blob pf-blob-2" />

      {/* NAVBAR */}
      <header className="pf-nav-wrapper">
        <div className="pf-container pf-nav">
          <div className="pf-nav-logo">
            <span className="pf-nav-logo-dot" />
            <span>Full-Stack Developer</span>
          </div>
          <nav className="pf-nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="pf-nav-cta">
            Let’s talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="hero" className="pf-section pf-hero">
          <div className="pf-container pf-hero-grid">
            <div className="pf-hero-text">
              <p className="pf-hero-badge">Available for freelance & remote</p>
              <h1>
                I design and build
                <span className="pf-hero-highlight"> fast, reliable</span>{" "}
                full-stack web applications.
              </h1>
              <p className="pf-hero-subtitle">
                I combine <strong>React + TypeScript</strong> on the frontend
                with <strong>FastAPI</strong> and SQL on the backend to deliver
                clean, maintainable, and scalable solutions for real clients.
              </p>

              <div className="pf-hero-actions">
                <a href="#projects" className="pf-btn pf-btn-primary">
                  View my work
                </a>
                <a href="#contact" className="pf-btn pf-btn-secondary">
                  Discuss a project
                </a>
              </div>

              <div className="pf-hero-metrics">
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">2+</span>
                  <span className="pf-hero-metric-label">years coding</span>
                </div>
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">10+</span>
                  <span className="pf-hero-metric-label">
                    completed projects
                  </span>
                </div>
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">100%</span>
                  <span className="pf-hero-metric-label">
                    client satisfaction
                  </span>
                </div>
              </div>
            </div>

            <div className="pf-hero-card-wrapper">
              <div className="pf-card pf-hero-card">
                <div className="pf-avatar">
                  <span>
                    <img
                      src="./Tyom.jpg"
                      style={{ width: "100%", borderRadius: "100%" }}
                    ></img>
                  </span>
                </div>
                <h2>Your Name</h2>
                <p className="pf-hero-role">Full-Stack Web Developer</p>
                <p className="pf-hero-stack">
                  React + TypeScript · FastAPI · SQL
                </p>

                <div className="pf-hero-tags">
                  <span>SPA & dashboards</span>
                  <span>APIs & databases</span>
                  <span>Education & business tools</span>
                </div>

                <div className="pf-hero-links">
                  <a href="https://github.com/yourname" target="_blank">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourname" target="_blank">
                    LinkedIn
                  </a>
                  <a href="mailto:youremail@example.com">Email</a>
                </div>

                <div className="pf-hero-status">
                  <span className="pf-status-dot" />
                  <span>Responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pf-section">
          <div className="pf-container pf-two-col">
            <div>
              <h2 className="pf-section-title">About me</h2>
              <p className="pf-section-subtitle">
                I build web applications from scratch: from database and API
                design to polished UI ready for real users.
              </p>
            </div>
            <div className="pf-card pf-text-card">
              <p>
                I focus on <strong>clarity</strong> and{" "}
                <strong>reliability</strong>. Every project I work on starts
                with understanding the business goal, then designing a clear
                architecture, and finally implementing a smooth, responsive
                interface.
              </p>
              <p>
                My main stack is{" "}
                <strong>React + TypeScript + Vite on the frontend</strong> and{" "}
                <strong>
                  FastAPI with a relational database on the backend
                </strong>
                . I’m comfortable working with authentication, routing,
                state-management patterns, and REST APIs.
              </p>
              <p>
                I enjoy long-term collaboration where I can incrementally
                improve the product, add features, and keep the codebase clean.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pf-section pf-section-alt">
          <div className="pf-container">
            <h2 className="pf-section-title">Core skills</h2>
            <p className="pf-section-subtitle">
              The technologies and areas I work with most of the time.
            </p>

            <div className="pf-skills-grid">
              <div className="pf-card pf-skill-card pf-fade-in">
                <h3>Frontend</h3>
                <ul>
                  {skills.frontend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-card pf-skill-card pf-fade-in pf-fade-delay-1">
                <h3>Backend</h3>
                <ul>
                  {skills.backend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-card pf-skill-card pf-fade-in pf-fade-delay-2">
                <h3>Workflow & other</h3>
                <ul>
                  {skills.extra.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="pf-section">
          <div className="pf-container">
            <h2 className="pf-section-title">Selected projects</h2>
            <p className="pf-section-subtitle">
              A short overview of the kind of applications I build.
            </p>

            <div className="pf-projects-grid">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`pf-card pf-project-card pf-fade-in pf-fade-delay-${index}`}
                >
                  <div className="pf-project-header">
                    <h3>{project.title}</h3>
                    <span className="pf-project-role">{project.role}</span>
                  </div>
                  <p className="pf-project-desc">{project.description}</p>
                  <div className="pf-project-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="pf-project-links">
                    {project.link && (
                      <a href={project.link} target="_blank">
                        Live demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank">
                        GitHub
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS / HOW I WORK */}
        <section className="pf-section pf-section-alt">
          <div className="pf-container">
            <h2 className="pf-section-title">How I work</h2>
            <p className="pf-section-subtitle">
              A simple and transparent process from the first message to
              deployment.
            </p>

            <div className="pf-process-grid">
              <div className="pf-process-step">
                <div className="pf-step-number">01</div>
                <h3>Understanding the project</h3>
                <p>
                  We discuss your goals, target audience, and required features.
                  I suggest a realistic scope and stack based on your budget and
                  timeline.
                </p>
              </div>
              <div className="pf-process-step">
                <div className="pf-step-number">02</div>
                <h3>Architecture & UI</h3>
                <p>
                  I design the API structure, database schema, and overall
                  frontend architecture, then create clean UI based on your
                  brand or a modern neutral style.
                </p>
              </div>
              <div className="pf-process-step">
                <div className="pf-step-number">03</div>
                <h3>Development & delivery</h3>
                <p>
                  I implement features step by step, share progress regularly,
                  and help with deployment and post-launch improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pf-section pf-contact-section">
          <div className="pf-container pf-contact-grid">
            <div>
              <h2 className="pf-section-title">Let’s build something</h2>
              <p className="pf-section-subtitle">
                Send a short description of your idea or project. I’ll reply
                with questions, suggestions, and a rough plan.
              </p>

              <ul className="pf-contact-list">
                <li>
                  <span className="pf-contact-label">Email</span>
                  <a href="mailto:youremail@example.com">
                    youremail@example.com
                  </a>
                </li>
                <li>
                  <span className="pf-contact-label">Location</span>
                  <span>Yerevan, Armenia (GMT+4)</span>
                </li>
                <li>
                  <span className="pf-contact-label">Languages</span>
                  <span>English · Russian · Armenian</span>
                </li>
              </ul>
            </div>

            <form
              className="pf-card pf-contact-card"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus("idle");

                const formData = new FormData(e.currentTarget);

                const res = await fetch("https://formspree.io/f/xpwvndzw", {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                });

                if (res.ok) {
                  setFormStatus("success");
                  e.currentTarget.reset();
                } else {
                  setFormStatus("error");
                }
              }}
            >
              <div className="pf-input-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="pf-input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="pf-input-group">
                <label htmlFor="project">Project / idea</label>
                <textarea
                  id="project"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe what you want to build…"
                  required
                />
              </div>

              <button
                type="submit"
                className="pf-btn pf-btn-primary pf-btn-full"
              >
                Send message
              </button>

              {formStatus === "success" && (
                <p style={{ color: "green", marginTop: "0.6rem" }}>
                  Message sent successfully ✨
                </p>
              )}

              {formStatus === "error" && (
                <p style={{ color: "red", marginTop: "0.6rem" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="pf-form-note">
                Your message will be delivered to me instantly.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="pf-container pf-footer-inner">
          <span>© {currentYear} Your Name. All rights reserved.</span>
          <span>Built with React · TypeScript · Vite · FastAPI</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
