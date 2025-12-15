import React, { useState, useEffect } from "react";
import "./App.css";

const tyomPhotoUrl = `${import.meta.env.BASE_URL}Tyom.jpg`;

type Project = {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const uiText = {
  en: {
    nav: {
      brand: "Full-Stack Developer",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Let’s talk",
      langEn: "EN",
      langRu: "RU",
    },
    hero: {
      badge: "Available for freelance & remote",
      titlePrefix: "I design and build",
      titleHighlight: " fast, reliable ",
      titleSuffix: "full-stack web applications.",
      subtitle1:
        "I combine React + TypeScript on the frontend with FastAPI and SQL on the backend to deliver clean, maintainable, and scalable solutions for real clients.",
      viewWorkBtn: "View my work",
      discussBtn: "Discuss a project",
      metric1Label: "years coding",
      metric2Label: "completed projects",
      metric3Label: "client satisfaction",
      cardName: "Your Name",
      cardRole: "Full-Stack Web Developer",
      cardStack: "React + TypeScript · FastAPI · SQL",
      tag1: "SPA & dashboards",
      tag2: "APIs & databases",
      tag3: "Education & business tools",
      cardGithub: "GitHub",
      cardLinkedIn: "LinkedIn",
      cardEmail: "Email",
      status: "Responds within 24 hours",
    },
    about: {
      title: "About me",
      subtitle:
        "I build web applications from scratch: from database and API design to polished UI ready for real users.",
      p1: "I focus on clarity and reliability. Every project I work on starts with understanding the business goal, then designing a clear architecture, and finally implementing a smooth, responsive interface.",
      p2: "My main stack is React + TypeScript + Vite on the frontend and FastAPI with a relational database on the backend. I’m comfortable working with authentication, routing, state-management patterns, and REST APIs.",
      p3: "I enjoy long-term collaboration where I can incrementally improve the product, add features, and keep the codebase clean.",
    },
    skills: {
      title: "Core skills",
      subtitle: "The technologies and areas I work with most of the time.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      extraTitle: "Workflow & other",
    },
    projects: {
      title: "Selected projects",
      subtitle: "A short overview of the kind of applications I build.",
      liveDemo: "Live demo",
      github: "GitHub",
    },
    process: {
      title: "How I work",
      subtitle:
        "A simple and transparent process from the first message to deployment.",
      step1Title: "Understanding the project",
      step1Text:
        "We discuss your goals, target audience, and required features. I suggest a realistic scope and stack based on your budget and timeline.",
      step2Title: "Architecture & UI",
      step2Text:
        "I design the API structure, database schema, and overall frontend architecture, then create clean UI based on your brand or a modern neutral style.",
      step3Title: "Development & delivery",
      step3Text:
        "I implement features step by step, share progress regularly, and help with deployment and post-launch improvements.",
    },
    contact: {
      title: "Let’s build something",
      subtitle:
        "Send a short description of your idea or project. I’ll reply with questions, suggestions, and a rough plan.",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "Yerevan, Armenia (GMT+4)",
      languagesLabel: "Languages",
      languagesValue: "English · Russian · Armenian",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      formEmailLabel: "Email",
      formEmailPlaceholder: "your@email.com",
      projectLabel: "Project / idea",
      projectPlaceholder:
        "Briefly describe what you want to build…",
      sendButton: "Send message",
      successMessage: "Message sent successfully ✨",
      errorMessage: "Something went wrong. Please try again.",
      formNote: "Your message will be delivered to me instantly.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React · TypeScript · Vite · FastAPI",
    },
  },
  ru: {
    nav: {
      brand: "Full-stack разработчик",
      home: "Главная",
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
      cta: "Написать мне",
      langEn: "EN",
      langRu: "RU",
    },
    hero: {
      badge: "Доступен для фриланса и удалённой работы",
      titlePrefix: "Я проектирую и создаю",
      titleHighlight: " быстрые и надёжные ",
      titleSuffix: "web-приложения полного цикла.",
      subtitle1:
        "На фронтенде использую React + TypeScript, на бэкенде — FastAPI и SQL, чтобы делать чистые, поддерживаемые и масштабируемые решения для реальных клиентов.",
      viewWorkBtn: "Посмотреть работы",
      discussBtn: "Обсудить проект",
      metric1Label: "года в программировании",
      metric2Label: "завершённых проектов",
      metric3Label: "удовлетворённость клиентов",
      cardName: "Ваше имя",
      cardRole: "Full-stack web-разработчик",
      cardStack: "React + TypeScript · FastAPI · SQL",
      tag1: "SPA и панели управления",
      tag2: "API и базы данных",
      tag3: "Образовательные и бизнес-сервисы",
      cardGithub: "GitHub",
      cardLinkedIn: "LinkedIn",
      cardEmail: "Почта",
      status: "Отвечаю в течение 24 часов",
    },
    about: {
      title: "Обо мне",
      subtitle:
        "Я создаю web-приложения «под ключ»: от базы данных и API до аккуратного интерфейса, готового к реальным пользователям.",
      p1: "Я делаю упор на ясность и надёжность. Каждый проект начинается с понимания бизнес-целей, затем я проектирую архитектуру и реализую плавный адаптивный интерфейс.",
      p2: "Мой основной стек — React + TypeScript + Vite на фронтенде и FastAPI с реляционной базой данных на бэкенде. Уверенно работаю с аутентификацией, роутингом, паттернами управления состоянием и REST-API.",
      p3: "Мне нравится долгосрочная работа над продуктом: постепенно улучшать функциональность, добавлять фичи и поддерживать чистоту кода.",
    },
    skills: {
      title: "Ключевые навыки",
      subtitle: "Технологии и области, с которыми я работаю чаще всего.",
      frontendTitle: "Фронтенд",
      backendTitle: "Бэкенд",
      extraTitle: "Процессы и прочее",
    },
    projects: {
      title: "Выбранные проекты",
      subtitle: "Краткий обзор типов приложений, которые я создаю.",
      liveDemo: "Демо",
      github: "GitHub",
    },
    process: {
      title: "Как я работаю",
      subtitle:
        "Простой и прозрачный процесс — от первого сообщения до деплоя.",
      step1Title: "Понимание задачи",
      step1Text:
        "Мы обсуждаем ваши цели, аудиторию и основные функции. Я предлагаю реалистичный объём работ и стек с учётом бюджета и сроков.",
      step2Title: "Архитектура и UI",
      step2Text:
        "Я проектирую структуру API, схему базы данных и фронтенд-архитектуру, затем создаю чистый интерфейс под ваш бренд или современный нейтральный стиль.",
      step3Title: "Разработка и запуск",
      step3Text:
        "Реализую функционал поэтапно, регулярно показываю прогресс и помогаю с деплоем и улучшениями после запуска.",
    },
    contact: {
      title: "Давайте сделаем ваш проект",
      subtitle:
        "Опишите идею или задачу в нескольких предложениях. Я отвечу с вопросами, предложениями и примерным планом.",
      emailLabel: "Почта",
      locationLabel: "Локация",
      locationValue: "Ереван, Армения (GMT+4)",
      languagesLabel: "Языки",
      languagesValue: "Английский · Русский · Армянский",
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      formEmailLabel: "Email",
      formEmailPlaceholder: "your@email.com",
      projectLabel: "Проект / идея",
      projectPlaceholder:
        "Кратко опишите, что вы хотите разработать…",
      sendButton: "Отправить сообщение",
      successMessage: "Сообщение успешно отправлено ✨",
      errorMessage: "Что-то пошло не так. Попробуйте ещё раз.",
      formNote: "Сообщение мгновенно попадёт ко мне.",
    },
    footer: {
      rights: "Все права защищены.",
      builtWith: "Сделано на React · TypeScript · Vite · FastAPI",
    },
  },
} as const;

type Lang = keyof typeof uiText;

const getInitialLang = (): Lang => {
  if (typeof window !== "undefined") {
    const saved = window.localStorage.getItem("pf-lang");
    if (saved === "en" || saved === "ru") return saved;

    const navLang = window.navigator.language || "";
    if (navLang.toLowerCase().startsWith("ru")) return "ru";
  }
  return "en";
};

const skillsByLang: Record<
  Lang,
  { frontend: string[]; backend: string[]; extra: string[] }
> = {
  en: {
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
  },
  ru: {
    frontend: [
      "React + TypeScript",
      "JavaScript",
      "Vite / архитектура SPA",
      "Современный CSS / Flex / Grid",
      "Адаптивный UI и UX",
      "Работа с формами и валидация",
    ],
    backend: [
      "Python + FastAPI",
      "Проектирование REST API",
      "Аутентификация и JWT",
      "Реляционные БД (MySQL / PostgreSQL)",
      "Базовый деплой (VPS / Docker)",
      "Интеграция AI",
    ],
    extra: [
      "Git & GitHub",
      "Работа с дизайнерами / Figma",
      "Понятная коммуникация",
      "Английский / Русский / Армянский",
    ],
  },
};

const projectsByLang: Record<Lang, Project[]> = {
  en: [
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
  ],
  ru: [
    {
      title: "MovieTalk English Platform",
      role: "Фулстек-разработка",
      description:
        "Образовательная платформа, где пользователи улучшают английский, смотря реальные фильмы и сериалы. Собственная админ-панель, управление эпизодами, сохранение прогресса просмотра и словарные инструменты.",
      tech: ["React", "TypeScript", "Vite", "FastAPI", "MySQL"],
      github: "#",
      link: "#",
    },
    {
      title: "TOEFL Practice Simulator",
      role: "Фронтенд-архитектура",
      description:
        "SPA-приложение для подготовки к TOEFL с разделами чтения, аудирования, говорения и письма, таймерами, системой подсчёта баллов и подробной аналитикой.",
      tech: ["React", "TypeScript", "SPA-архитектура"],
      github: "#",
    },
    {
      title: "Modern Business Website",
      role: "Фулстек + деплой",
      description:
        "Корпоративный сайт для малого бизнеса с админкой в стиле CMS, SEO-оптимизацией и быстрой загрузкой на мобильных и десктопах.",
      tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      github: "#",
    },
  ],
};

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [lang, setLang] = useState<Lang>(() => getInitialLang());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("pf-lang", lang);
    }
  }, [lang]);

  const text = uiText[lang];
  const skills = skillsByLang[lang];
  const projects = projectsByLang[lang];

  const handleLangChange = (newLang: Lang) => {
    setLang(newLang);
  };

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
            <span>{text.nav.brand}</span>
          </div>
          <nav className="pf-nav-links">
            <a href="#hero">{text.nav.home}</a>
            <a href="#about">{text.nav.about}</a>
            <a href="#skills">{text.nav.skills}</a>
            <a href="#projects">{text.nav.projects}</a>
            <a href="#contact">{text.nav.contact}</a>
          </nav>
          <div className="pf-nav-right">
            <div className="pf-lang-toggle">
              <button
                type="button"
                className={lang === "en" ? "pf-lang-active" : ""}
                onClick={() => handleLangChange("en")}
              >
                English
              </button>
              <button
                type="button"
                className={lang === "ru" ? "pf-lang-active" : ""}
                onClick={() => handleLangChange("ru")}
              >
                Русский
              </button>
            </div>
            <a href="#contact" className="pf-nav-cta">
              {text.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section id="hero" className="pf-section pf-hero">
          <div className="pf-container pf-hero-grid">
            <div className="pf-hero-text">
              <p className="pf-hero-badge">{text.hero.badge}</p>
              <h1>
                {text.hero.titlePrefix}
                <span className="pf-hero-highlight">
                  {text.hero.titleHighlight}
                </span>
                {text.hero.titleSuffix}
              </h1>
              <p className="pf-hero-subtitle">{text.hero.subtitle1}</p>

              <div className="pf-hero-actions">
                <a href="#projects" className="pf-btn pf-btn-primary">
                  {text.hero.viewWorkBtn}
                </a>
                <a href="#contact" className="pf-btn pf-btn-secondary">
                  {text.hero.discussBtn}
                </a>
              </div>

              <div className="pf-hero-metrics">
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">2+</span>
                  <span className="pf-hero-metric-label">
                    {text.hero.metric1Label}
                  </span>
                </div>
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">10+</span>
                  <span className="pf-hero-metric-label">
                    {text.hero.metric2Label}
                  </span>
                </div>
                <div className="pf-hero-metric">
                  <span className="pf-hero-metric-number">100%</span>
                  <span className="pf-hero-metric-label">
                    {text.hero.metric3Label}
                  </span>
                </div>
              </div>
            </div>

            <div className="pf-hero-card-wrapper">
              <div className="pf-card pf-hero-card">
                <div className="pf-avatar">
                  <span>
                    <img
                      src={tyomPhotoUrl}
                      alt="Artyom Hakhumyan"
                      style={{ width: "100%", borderRadius: "100%" }}
                    />
                  </span>
                </div>
                <h2>{text.hero.cardName}</h2>
                <p className="pf-hero-role">{text.hero.cardRole}</p>
                <p className="pf-hero-stack">{text.hero.cardStack}</p>

                <div className="pf-hero-tags">
                  <span>{text.hero.tag1}</span>
                  <span>{text.hero.tag2}</span>
                  <span>{text.hero.tag3}</span>
                </div>

                <div className="pf-hero-links">
                  <a
                    href="https://github.com/yourname"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.hero.cardGithub}
                  </a>
                  <a
                    href="https://linkedin.com/in/yourname"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.hero.cardLinkedIn}
                  </a>
                  <a href="mailto:youremail@example.com">
                    {text.hero.cardEmail}
                  </a>
                </div>

                <div className="pf-hero-status">
                  <span className="pf-status-dot" />
                  <span>{text.hero.status}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pf-section">
          <div className="pf-container pf-two-col">
            <div>
              <h2 className="pf-section-title">{text.about.title}</h2>
              <p className="pf-section-subtitle">{text.about.subtitle}</p>
            </div>
            <div className="pf-card pf-text-card">
              <p>{text.about.p1}</p>
              <p>{text.about.p2}</p>
              <p>{text.about.p3}</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="pf-section pf-section-alt">
          <div className="pf-container">
            <h2 className="pf-section-title">{text.skills.title}</h2>
            <p className="pf-section-subtitle">{text.skills.subtitle}</p>

            <div className="pf-skills-grid">
              <div className="pf-card pf-skill-card pf-fade-in">
                <h3>{text.skills.frontendTitle}</h3>
                <ul>
                  {skills.frontend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-card pf-skill-card pf-fade-in pf-fade-delay-1">
                <h3>{text.skills.backendTitle}</h3>
                <ul>
                  {skills.backend.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pf-card pf-skill-card pf-fade-in pf-fade-delay-2">
                <h3>{text.skills.extraTitle}</h3>
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
            <h2 className="pf-section-title">{text.projects.title}</h2>
            <p className="pf-section-subtitle">{text.projects.subtitle}</p>

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
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {text.projects.liveDemo}
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        {text.projects.github}
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
            <h2 className="pf-section-title">{text.process.title}</h2>
            <p className="pf-section-subtitle">{text.process.subtitle}</p>

            <div className="pf-process-grid">
              <div className="pf-process-step">
                <div className="pf-step-number">01</div>
                <h3>{text.process.step1Title}</h3>
                <p>{text.process.step1Text}</p>
              </div>
              <div className="pf-process-step">
                <div className="pf-step-number">02</div>
                <h3>{text.process.step2Title}</h3>
                <p>{text.process.step2Text}</p>
              </div>
              <div className="pf-process-step">
                <div className="pf-step-number">03</div>
                <h3>{text.process.step3Title}</h3>
                <p>{text.process.step3Text}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pf-section pf-contact-section">
          <div className="pf-container pf-contact-grid">
            <div>
              <h2 className="pf-section-title">{text.contact.title}</h2>
              <p className="pf-section-subtitle">
                {text.contact.subtitle}
              </p>

              <ul className="pf-contact-list">
                <li>
                  <span className="pf-contact-label">
                    {text.contact.emailLabel}
                  </span>
                  <a href="mailto:youremail@example.com">
                    youremail@example.com
                  </a>
                </li>
                <li>
                  <span className="pf-contact-label">
                    {text.contact.locationLabel}
                  </span>
                  <span>{text.contact.locationValue}</span>
                </li>
                <li>
                  <span className="pf-contact-label">
                    {text.contact.languagesLabel}
                  </span>
                  <span>{text.contact.languagesValue}</span>
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
                <label htmlFor="name">{text.contact.nameLabel}</label>
                <input
                  id="name"
                  name="name"
                  placeholder={text.contact.namePlaceholder}
                  required
                />
              </div>

              <div className="pf-input-group">
                <label htmlFor="email">
                  {text.contact.formEmailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={text.contact.formEmailPlaceholder}
                  required
                />
              </div>

              <div className="pf-input-group">
                <label htmlFor="project">
                  {text.contact.projectLabel}
                </label>
                <textarea
                  id="project"
                  name="message"
                  rows={4}
                  placeholder={text.contact.projectPlaceholder}
                  required
                />
              </div>

              <button
                type="submit"
                className="pf-btn pf-btn-primary pf-btn-full"
              >
                {text.contact.sendButton}
              </button>

              {formStatus === "success" && (
                <p style={{ color: "green", marginTop: "0.6rem" }}>
                  {text.contact.successMessage}
                </p>
              )}

              {formStatus === "error" && (
                <p style={{ color: "red", marginTop: "0.6rem" }}>
                  {text.contact.errorMessage}
                </p>
              )}

              <p className="pf-form-note">{text.contact.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="pf-container pf-footer-inner">
          <span>
            © {currentYear} Your Name. {text.footer.rights}
          </span>
          <span>{text.footer.builtWith}</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
