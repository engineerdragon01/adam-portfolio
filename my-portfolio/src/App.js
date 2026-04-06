import Modal from './components/Modal';
import HeroDeco from './components/HeroDeco';
import ExperienceTileLogo from './components/ExperienceTileLogo';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './css/styles.css';

import profileImage from './images/profile.jpg';
import projectOne from "./images/works/task.jpg";
import projectTwo from "./images/works/housing.jpg";
import projectThree from "./images/works/portfolioCode.jpg";
import projectFour from "./images/works/youtube.jpg";
import projectFive from "./images/works/adblock.png";
import projectSix from "./images/works/gitPic.jpeg";
import projectSeven from "./images/works/sudoku.jpg";
import projectEight from "./images/works/covid.jpg";
import projectNine from "./images/works/sorting.jpg";

import resume from './documents/AdamChoisResume.pdf';
import veevaLogoRaster from './images/veeva-logo-raster.jpg';

// EmailJS Configuration
// Credentials are loaded from environment variables for security
// See .env.example for setup instructions
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
};

function App() {
  const [openModal, setOpenModal] = useState(null);
  const [experienceDetailId, setExperienceDetailId] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState(() => new Set());
  const commandInputRef = useRef(null);
  const formRef = useRef();

  const openModalById = (modalId) => setOpenModal(modalId);
  const closeModal = () => setOpenModal(null);

  const commandItems = [
    { id: 'home', label: 'Go to Home', action: () => window.location.assign('#home') },
    { id: 'about', label: 'Go to About', action: () => window.location.assign('#about') },
    { id: 'services', label: 'Go to Services', action: () => window.location.assign('#services') },
    { id: 'experience', label: 'Go to Experience', action: () => window.location.assign('#education') },
    { id: 'projects', label: 'Go to Projects', action: () => window.location.assign('#works') },
    { id: 'contact', label: 'Go to Contact', action: () => window.location.assign('#contact') },
    { id: 'resume', label: 'Download Resume', action: () => window.open(resume, '_blank', 'noopener,noreferrer') },
  ];
  const filteredCommandItems = commandItems.filter((item) =>
    item.label.toLowerCase().includes(commandQuery.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status message when user starts typing
    if (formStatus.message) {
      setFormStatus({ type: '', message: '' });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again or contact me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Projects data
  const projects = [
    { id: 1, image: projectOne, title: "The Unit", category: "The Key to Task-Management" },
    { id: 2, image: projectTwo, title: "Housing Hound", category: "Housing Made Simple" },
    { id: 3, image: projectThree, title: "My Portfolio V2", category: "Introducing You to Me" },
    { id: 4, image: projectFour, title: "Youtube Downloader", category: "Get Videos & Music for Offline Use" },
    { id: 5, image: projectFive, title: "Ad Blocker", category: "Get Rid of Pesky Ads" },
    { id: 6, image: projectSix, title: "Gitlet", category: "Git's Little Brother" },
    { id: 7, image: projectSeven, title: "Sudoku Solver", category: "Backtracking, AI, & GUI" },
    { id: 8, image: projectEight, title: "COVID Voice Assistant", category: "Ask and You Shall Receive... Information" },
    { id: 9, image: projectNine, title: "Sorting Algorithm Visualizer", category: "Watch Some Sorting Action!" }
  ];

  const aboutSkillCategories = [
    {
      title: 'Languages',
      tone: 'languages',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'HTML & CSS', 'Golang'],
    },
    {
      title: 'Tools & frameworks',
      tone: 'tools',
      items: ['React.js', 'Vue.js', 'Node.js', 'React Native', 'AWS', 'Git', 'Spring Boot'],
    },
    {
      title: 'AI / ML tools',
      tone: 'aiml',
      items: ['Claude', 'ChatGPT', 'Cursor', 'TensorFlow', 'Google Colab', 'Keras', 'Pandas', 'NumPy'],
    },
  ];

  // Experience data — logos via favicon URL or bundled image (Veeva: high-res square asset).
  const experiences = [
    {
      id: 'veeva',
      company: 'Veeva Systems',
      role: 'Associate Software Engineer in Test',
      dates: 'Jun 2023 – Present',
      logo: veevaLogoRaster,
      logoFallback: 'V',
      summary: 'Automation & tooling for clinical and life sciences software.',
      bullets: [
        'Implemented internal automation framework feature tests to improve the efficiency of QA and developer tools.',
        'Contributed QA and automation features for a company-wide MySQL database foreign character support upgrade.',
        'Triaged defects on multiple pipelines to remedy development bottlenecks and increase production efficiency.',
      ],
      tags: ['Automation', 'QA tooling', 'Java', 'Python', 'MySQL'],
    },
    {
      id: 'genentech',
      company: 'Genentech',
      role: 'Software Engineering Intern',
      dates: 'May 2022 – Aug 2022',
      logo: 'https://www.google.com/s2/favicons?domain=gene.com&sz=128',
      logoFallback: 'G',
      summary: 'APIs and tools for clinical protocol automation.',
      bullets: [
        'Contributed to a clinical protocol automation software tool with immediate impact on clinical trial efficiency.',
        'Built an API that queries and downloads protocols and improves outdated healthcare document review processes.',
        'Designed and implemented UI for authoring and amending protocols to help med‑writers review and edit faster.',
      ],
      tags: ['APIs', 'Python', 'Vue.js', 'Automation'],
    },
    {
      id: 'berkeley-research',
      company: 'UC Berkeley',
      role: 'Undergraduate Researcher (Arkin, Anderson, Nielsen Labs)',
      tileRole: 'Undergraduate Researcher',
      dates: 'Sep 2021 – Aug 2022',
      logo: 'https://www.google.com/s2/favicons?domain=berkeley.edu&sz=128',
      logoFallback: 'B',
      summary: 'Research across three labs spanning simulation, computational biology, and ML‑driven pattern analysis.',
      bullets: [
        'Arkin Lab – Partnered with NASA to build a Python library that simulates missions to Mars and a synthetic biomanufactory, including crew interaction and inventory recycling models.',
        'Arkin Lab – Developed gamification of the simulation to make tools more interactive and easier to use for scientists.',
        'Anderson Lab – Created a support vector machine to identify new metabolites based on chemical structure of natural molecules, plus a BFS algorithm over molecular graphs.',
        'Anderson Lab – Migrated enzyme feature data from legacy databases into a new schema for faster, more reliable analysis.',
        'Nielsen Lab – Built ML pattern recognition pipelines in Python and R for dorsal spot variations in Oophaga pumilio and related phenotypes.',
        'Nielsen Lab – Explored correlations between visual traits (spot size/density, color) and toxicity, using newly discovered genomic fragments.',
      ],
      tags: ['Python', 'R', 'ML', 'Bioinformatics', 'Java'],
    },
    {
      id: 'amazon',
      company: 'Amazon',
      role: 'Software Development Engineering Intern',
      dates: 'Jun 2021 – Aug 2021',
      logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128',
      logoFallback: 'A',
      summary: 'Internal APIs and onboarding tooling.',
      bullets: [
        'Utilized internal and external AWS tools for management and security of company data and API metrics.',
        'Developed internal APIs to improve onboarding data transfer efficiency and configuration by about 70%.',
        'Modeled API structure with internal XML and JSON frameworks and wrote team documentation for APIs.',
      ],
      tags: ['APIs', 'AWS', 'Backend', 'Java'],
    },
    {
      id: 'bayer',
      company: 'Bayer',
      role: 'Quality Control Impurity Analysis / ELISA Intern',
      tileRole: 'QC / ELISA Intern',
      dates: 'Jun 2020 – Sep 2020',
      logo: 'https://www.google.com/s2/favicons?domain=bayer.com&sz=128',
      logoFallback: 'Ba',
      summary: 'Quality control and reporting for biopharma.',
      bullets: [
        'Drafted financial data spreadsheets and presentations for company executives and project managers.',
        'Reviewed and revised research procedures and completed an annual report detailing essential chemical components.',
        'Received professional training in Good Manufacturing Practices and medical Standard Operating Procedures.',
      ],
      tags: ['Biotech', 'QC', 'Reporting', 'Python'],
    },
    {
      id: 'google-program',
      company: 'Google',
      role: 'Student Programmer',
      dates: 'Jul 2019 – Aug 2019',
      logo: 'https://www.google.com/s2/favicons?domain=google.com&sz=128',
      logoFallback: 'G',
      summary: 'Introductory software engineering program and project.',
      bullets: [
        'Learned software project management and design principles plus fundamentals of full‑stack development.',
        'Received mentorship from lead software engineers at Google Headquarters.',
        'Developed a web app and presented the project live to Google executives and employees.',
      ],
      tags: ['Python', 'Google App Engine', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'egusd',
      company: 'Elk Grove Unified School District',
      role: 'Engineering Intern',
      dates: 'Jun 2018 – Aug 2018',
      logo: 'https://www.google.com/s2/favicons?domain=egusd.net&sz=128',
      logoFallback: 'EG',
      summary: 'Construction, content, and technology in K‑12.',
      bullets: [
        'Worked alongside district managers and technology leaders for classroom deployments.',
        'Kept detailed notes and extensive photographs of construction across schools throughout EGUSD.',
        'Developed and maintained updated content for district pages and YouTube channels.',
      ],
      tags: ['Engineering', 'Content', 'Operations'],
    },
  ];

  // Handle scroll events for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', isNavOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [isNavOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const closeIfDesktop = () => {
      if (mq.matches) setIsNavOpen(false);
    };
    mq.addEventListener('change', closeIfDesktop);
    closeIfDesktop();
    return () => mq.removeEventListener('change', closeIfDesktop);
  }, []);

  // Command palette hotkeys: Cmd/Ctrl + K to open, Escape to close
  useEffect(() => {
    const onKeyDown = (event) => {
      const isMacShortcut = event.metaKey && event.key.toLowerCase() === 'k';
      const isWindowsShortcut = event.ctrlKey && event.key.toLowerCase() === 'k';
      if (isMacShortcut || isWindowsShortcut) {
        event.preventDefault();
        setIsCommandPaletteOpen((prev) => {
          const next = !prev;
          if (next) {
            setCommandQuery('');
            setSelectedCommandIndex(0);
          }
          return next;
        });
      }
      if (event.key === 'Escape') {
        if (isCommandPaletteOpen) {
          setIsCommandPaletteOpen(false);
        } else if (isNavOpen) {
          setIsNavOpen(false);
        } else if (experienceDetailId) {
          setExperienceDetailId(null);
        } else if (openModal !== null) {
          setOpenModal(null);
        }
      }
      if (!isCommandPaletteOpen) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedCommandIndex((prev) =>
          Math.min(prev + 1, Math.max(0, filteredCommandItems.length - 1))
        );
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedCommandIndex((prev) => Math.max(prev - 1, 0));
      }
      if (event.key === 'Enter' && filteredCommandItems[selectedCommandIndex]) {
        event.preventDefault();
        filteredCommandItems[selectedCommandIndex].action();
        setIsCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCommandPaletteOpen, isNavOpen, filteredCommandItems, selectedCommandIndex, experienceDetailId, openModal]);

  useEffect(() => {
    if (!isCommandPaletteOpen) return;
    commandInputRef.current?.focus();
  }, [isCommandPaletteOpen]);

  // Section reveal on scroll: add section id to visibleSections when in view
  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.section;
          if (!id) return;
          setVisibleSections((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) next.add(id);
            else next.delete(id);
            return next;
          });
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectedExperience = experiences.find((e) => e.id === experienceDetailId);

  return (
    <div className="App">
        {/* Navbar – floating capsule */}
        <nav className={`navbar ${isSticky ? "sticky" : ""}`} role="navigation">
          <div className="navbar-capsule">
            <div className="navbar-inner">
              <button
                type="button"
                id="nav-menu-toggle"
                className={`nav-toggler ${isNavOpen ? 'open' : ''}`}
                aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isNavOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsNavOpen((open) => !open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                id="primary-navigation"
                className={`nav-links ${isNavOpen ? 'open' : ''}`}
                onClick={(e) => {
                  if (e.target === e.currentTarget) setIsNavOpen(false);
                }}
              >
                <a href="#home" onClick={() => setIsNavOpen(false)} className="nav-link">Home</a>
                <a href="#about" onClick={() => setIsNavOpen(false)} className="nav-link">About</a>
                <a href="#services" onClick={() => setIsNavOpen(false)} className="nav-link">Services</a>
                <a href="#education" onClick={() => setIsNavOpen(false)} className="nav-link">Experience</a>
                <a href="#works" onClick={() => setIsNavOpen(false)} className="nav-link">Projects</a>
                <a href="#contact" onClick={() => setIsNavOpen(false)} className="nav-link">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {isCommandPaletteOpen && (
          <div
            className="command-palette-overlay"
            onClick={() => {
              setIsCommandPaletteOpen(false);
              setCommandQuery('');
              setSelectedCommandIndex(0);
            }}
          >
            <div className="command-palette" onClick={(event) => event.stopPropagation()}>
              <div className="command-palette-header">
                <span>Quick Actions</span>
                <span className="command-palette-hint">ESC</span>
              </div>
              <div className="command-palette-search-wrap">
                <input
                  ref={commandInputRef}
                  type="text"
                  className="command-palette-search"
                  placeholder="Search commands..."
                  value={commandQuery}
                  onChange={(event) => {
                    setCommandQuery(event.target.value);
                    setSelectedCommandIndex(0);
                  }}
                />
              </div>
              <div className="command-palette-list">
                {filteredCommandItems.length === 0 ? (
                  <div className="command-palette-empty">No matching commands.</div>
                ) : (
                  filteredCommandItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`command-palette-item ${selectedCommandIndex === index ? 'active' : ''}`}
                      onMouseEnter={() => setSelectedCommandIndex(index)}
                      onClick={() => {
                        item.action();
                        setIsCommandPaletteOpen(false);
                        setCommandQuery('');
                        setSelectedCommandIndex(0);
                      }}
                    >
                      <span>{item.label}</span>
                      <span className="command-palette-arrow">↵</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Hero / Home */}
        <section id="home">
          <HeroDeco />
          <div className="inner-width hero-inner">
            <div className="hero-content">
              <div className="hero-pill">/adam · software engineer</div>

              <h1 className="hero-title">
                Building Thoughtful Software.<br />Solving Real Problems.
              </h1>

              <p className="hero-subtitle">
                I’m a software engineer with a background in bioengineering and research, now focused on how modern engineers can use AI to build better software and products.
              </p>

              <div className="hero-command-palette">
                <div className="hero-command-row hero-command-header">
                  <span className="hero-command-kbd">⌘</span>
                  <span className="hero-command-kbd">K</span>
                  <span className="hero-command-label">Quick summary</span>
                  <button
                    type="button"
                    className="hero-command-open"
                    onClick={() => setIsCommandPaletteOpen(true)}
                  >
                    Open
                  </button>
                </div>
                <div className="hero-command-row">
                  <div className="hero-command-text">
                    <span className="hero-command-title">Currently</span>
                    <span className="hero-command-body">Associate Software Engineer in Test at Veeva Systems</span>
                  </div>
                </div>
                <div className="hero-command-row">
                  <div className="hero-command-text">
                    <span className="hero-command-title">Previously</span>
                    <span className="hero-command-body">Genentech, Amazon, and research at UC Berkeley</span>
                  </div>
                </div>
                <div className="hero-command-row">
                  <div className="hero-command-text">
                    <span className="hero-command-title">What I work on</span>
                    <span className="hero-command-body">APIs, automation frameworks, and data-heavy tools</span>
                  </div>
                </div>
              </div>

              <div className="hero-cta-row">
                <a href="#works" className="hero-cta hero-cta-primary">View my work</a>
                <a href={resume} download="AdamChoisResume" className="hero-cta hero-cta-secondary">
                  Download résumé
                </a>
              </div>

              <div className="hero-secondary-row">
                <div className="hero-social">
                  <a href="https://www.linkedin.com/in/adam-chois" className="fab fa-linkedin-in" aria-label="LinkedIn"></a>
                  <a href="https://github.com/engineerdragon01" className="fab fa-github" aria-label="GitHub"></a>
                  <a href="https://www.instagram.com/atom.chois/" className="fab fa-instagram" aria-label="Instagram"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0 80V40c120-20 240 20 360 20s240-40 360-40 240 20 360 20 240-40 360-40 240 20 360 20V80H0z" fill="currentColor" fillOpacity="0.06" />
              <path d="M0 80V55c80-12 160 12 240 12s160-24 240-24 160 12 240 12 160-24 240-24 160 12 240 12 160-24 240-24V80H0z" fill="currentColor" fillOpacity="0.04" />
            </svg>
          </div>
        </section>

        {/* About / Snapshot */}
        <section id="about" data-section="about" className={visibleSections.has('about') ? 'in-view' : ''}>
          <div className="inner-width about-section section-reveal-content">
            <h1 className="section-title">About</h1>
            <div className="about-layout">
              <div className="about-intro-column">
                <div className="about-intro-content">
                  <figure className="about-avatar-figure">
                    <img src={profileImage} alt="Portrait of Adam Chois" className="about-avatar" width="152" height="152" />
                  </figure>
                  <div className="about-copy">
                    <p className="about-lede">
                      As someone with a non-traditional background in software engineering, I love being able to view problems from both a traditional lens and a scientific applications perspective.
                      I am excited by all the new AI tools available to modern engineers and how they can be used to boost efficiency and learning.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="about-skills-column" aria-labelledby="about-skills-heading">
                <div className="about-skills-block">
                  <div className="about-skills-divider" aria-hidden="true" />
                  <h2 className="about-skills-heading" id="about-skills-heading">
                    Technical skills
                  </h2>
                  <div className="about-skills-grid section-reveal-stagger">
                    {aboutSkillCategories.map((category) => (
                      <div
                        key={category.title}
                        className={`about-skill-column about-skill-column--${category.tone}`}
                      >
                        <h3 className="about-skill-column-title">{category.title}</h3>
                        <ul className="about-skill-bubbles">
                          {category.items.map((item) => (
                            <li key={item} className="about-skill-bubble">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Services / What I Do */}
        <section id="services" data-section="services" className={`dark ${visibleSections.has('services') ? 'in-view' : ''}`}>
          <div className="inner-width section-reveal-content">
            <h1 className="section-title">What I Do</h1>
            <div className="services-grid section-reveal-stagger">
              <div className="service-card">
                <h3>Automation & QA tooling</h3>
                <p>
                  I design and maintain automated tests, internal frameworks, and CI integrations that keep releases
                  reliable without slowing teams down.
                </p>
                <div className="skill-pill-row">
                  <span className="skill-pill">Test automation</span>
                  <span className="skill-pill">CI pipelines</span>
                  <span className="skill-pill">Java</span>
                  <span className="skill-pill">Python</span>
                </div>
              </div>

              <div className="service-card">
                <h3>APIs & backend systems</h3>
                <p>
                  I build and evolve backend services and APIs for data-heavy products, with attention to clarity,
                  performance, and maintainability.
                </p>
                <div className="skill-pill-row">
                  <span className="skill-pill">API design</span>
                  <span className="skill-pill">Java</span>
                  <span className="skill-pill">SQL</span>
                  <span className="skill-pill">REST</span>
                </div>
              </div>

              <div className="service-card">
                <h3>Data & ML explorations</h3>
                <p>
                  I prototype ML-backed tools and visualizations when they help answer harder questions or reveal
                  patterns that are otherwise hard to see.
                </p>
                <div className="skill-pill-row">
                  <span className="skill-pill">Python</span>
                  <span className="skill-pill">ML</span>
                  <span className="skill-pill">Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience – vertical map */}
        <section id="education" data-section="education" className={visibleSections.has('education') ? 'in-view' : ''}>
          <div className="inner-width section-reveal-content">
            <div className="experience-intro">
              <h1 className="section-title">Experience</h1>
              <p className="experience-section-subtitle">Click a tile to view more</p>
            </div>

            <div className="experience-tiles-grid section-reveal-stagger">
              {experiences.map((exp) => {
                const tileTitle = exp.tileRole ?? exp.role;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    className="experience-tile"
                    onClick={() => setExperienceDetailId(exp.id)}
                    aria-label={`${exp.company}: ${exp.role}, ${exp.dates}. Open details.`}
                  >
                    <ExperienceTileLogo
                      src={exp.logo}
                      fallback={exp.logoFallback}
                      wide={!!exp.logoWide}
                    />
                    <div className="experience-tile-text">
                      <span className="experience-tile-company">{exp.company}</span>
                      <span className="experience-tile-title">{tileTitle}</span>
                      <span className="experience-tile-dates">{exp.dates}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="works" data-section="works" className={`dark ${visibleSections.has('works') ? 'in-view' : ''}`}>
          <div className="inner-width section-reveal-content">
            <h1 className="section-title">Projects</h1>
            <div className="projects-simple-grid section-reveal-stagger">
              {projects.map((project) => (
                <article key={project.id} className="project-simple-card">
                  <div className="project-simple-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-simple-body">
                    <h2>{project.title}</h2>
                    <p>{project.category}</p>
                    <button
                      type="button"
                      className="project-card-cta"
                      onClick={() => openModalById(project.id)}
                    >
                      View details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Modals */}

        <Modal
          isOpen={!!selectedExperience}
          onClose={() => setExperienceDetailId(null)}
          header={selectedExperience?.company ?? ''}
          projectType={selectedExperience ? `${selectedExperience.role} · ${selectedExperience.dates}` : ''}
          plainSubtitle
        >
          {selectedExperience ? (
            <div className="modal-body modal-body--experience">
              <p>{selectedExperience.summary}</p>
              <ul className="experience-modal-bullets">
                {selectedExperience.bullets.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="skill-pill-row experience-modal-tags">
                {selectedExperience.tags.map((tag) => (
                  <span key={tag} className="skill-pill skill-pill--on-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </Modal>

        <Modal 
              isOpen={openModal === 1} 
              onClose={closeModal} 
              header={"The Unit"} 
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={projectOne} alt=""/>
            <p>
              "The Unit" was the first project that I ever made,
              and represents the first couple weeks I started
              learning to code. This is a group-based
              task-manager intended to help people keep track of
              assigned resonsibilites.
              All you need to do is sign up with your Google account,
              create "a unit," and assign the tasks and users you
              want to include. Tasks are randomly, and evenly
              distributed amongst unit members, and when they're
              completed there is a submission system in place to
              indicate completion. Whether it's for family events,
              work parties, or professional checklists, "The Unit"
              can be used for both casual and professional use.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/unitproject-repo.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>

        </Modal>

        <Modal 
              isOpen={openModal === 2} 
              onClose={closeModal} 
              header={"Housing Hound"} 
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={projectTwo} alt="" />
            <p>
              "Housing Hound" uses a webscraper to crawl through
              Facebook pages detailing college housing offers.
              Users input parameters to the main page based on
              the type of housing options they are looking for.
              This includes housing price, number of bedrooms,
              number of bathrooms, and hopefully other parameters
              as this project develops later on. This project hasn't
              been deployed because server issues can occur
              since this webscraper technically breaks Facebook
              terms and services, but it is still a useful,
              intuitive project.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/TreeHacks-2020.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>
        
        <Modal 
              isOpen={openModal === 3} 
              onClose={closeModal}
              header={"My Portfolio V2"}
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={projectThree} alt="" />
            <p>
              This is the third iteration of my attempts
              to construct the personal portfolio website
              you see before you. I am very proud of this site
              because of how much time and effort I spent
              making sure that it looks as clean and
              presentable as possible. I began developing
              this single column site in React, but decided
              to go with HTML, CSS, JavaScript, and JQuery,
              since the skills are transferrable to React
              web applications.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/New-Portfolio.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 4} 
              onClose={closeModal}
              header={"Youtube Downloader"}
              projectType={"Google Chrome Extension"}
        >
          <div className="modal-body">
            <img src={projectFour} alt="" />
            <p>
              I got tired of waiting through sponsored
              advertisements and youtube commercials,
              constantly getting interrupted while watching
              tutorials and listening to music on Youtube.
              This extension uses a simple local server,
              created using simple Node.js, to perform a
              GET request for the video and/or audio file
              of your choosing. Some day soon, I hope to
              create an intuitive playlist making function,
              but for now, please enjoy the benefits that
              come with this extension. Simply follow general
              directions for extension activation and use
              command "node index.js" to launch your server,
              then download away!
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/Youtube-Downloader-Extension.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 5} 
              onClose={closeModal}
              header={"Ad Blocker"}
              projectType={"Google Chrome Extension"}
        >
          <div className="modal-body">
            <img src={projectFive} alt="" />
            <p>
              Everywhere you go on the internet you're going
              to be bombarded with a number of advertisements,
              no matter what website you go on. I decided to
              make this simple ad blocking chrome extension to
              help reduce some of the advertisement clutter
              that students, and internet perousers, face
              everyday. When activated, the extension will
              block the current website's GET request to
              any advertisement websites listed in the extension
              source code. I am working on going through the
              cookies of popular websites and adding those
              advertisement sources to the list of places
              to block.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/Ad-Blocker-Extension.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 6} 
              onClose={closeModal}
              header={"Gitlet"}
              projectType={"Version-Control System"}
        >
          <div className="modal-body">
            <img src={projectSix} alt="" />
            <p>
              The toughest project in UC Berkeley's Data
              Structures course (CS 61B) is called "Gitlet."
              This large, time-consuming assignment forced
              my peers and I to learn about data-flow models,
              and how to implement them. "Gitlet" has a majority
              of the functions that are available when using
              Git/Github, and can be used relatively seamlessly
              in an IDE like IntelliJ. I found this project
              to be both interesting and incredibly challenging,
              and would recommend other young programmers
              to try and develop their own "Gitlet."
            </p>
            <p>
              <strong>Disclaimer:</strong>
              This is a school project, so I am unable to disclose the codebase for this material.
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 7} 
              onClose={closeModal}
              header={"Sudoku Solver"}
              projectType={"Game w/ GUI"}
        >
          <div className="modal-body">
            <img src={projectSeven} alt="" />
            <p>
              As I'm growing in my understanding of various algorithms
              and data structures, I decided to learn about and explore
              the applications of the Backtracking Algorithm. I've never
              done a Sudoku Solver, made a GUI, or used PyGame before,
              so this project killed four birds with one stone. Manual
              play and automatic solving are both possible with the GUI,
              and it's really cool to visualize the Backtracking Algorithm
              in action. I'm planning on adding more puzzles, so the user
              doesn't have to play the same board every time, but this
              current version is really meant to illustrate and explore
              the depth of the concepts behind the Sudoku Solver.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/Sudoku-Solver-GUI.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 8} 
              onClose={closeModal}
              header={"COVID Voice Assistant"}
              projectType={"Backend Voice Assistant"}
        >
          <div className="modal-body">
            <img src={projectEight} alt="" />
            <p>
              Alexa. Siri. Cortana. All of these voice assistants
              are used on a daily basis by millions of people around
              the world, so I wanted to get in on the action and
              try to make my own simple voice assistant. You can ask
              the voice assistant to tell how many covid cases or deaths
              there are in the world or in a specific country. If you
              say "update," a web request will be made to the parseHub
              webscraper I set up for a website that lists out live
              COVID data. I'm hoping to expand the data queries that
              are available with this assistant, and develop more regex
              audio input recognition patterns.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/Covid-Voice-Assistant.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={openModal === 9} 
              onClose={closeModal}
              header={"Sorting Algorithm Visualizer"}
              projectType={"React Visualizer"}
        >
          <div className="modal-body">
            <img src={projectNine} alt="" />
            <p>
              After taking the Data Structures course at my
              university, I had been exposed to so many different
              search and sorting algorithms, so I figured a
              sorting algorithm visualizer would help reinforce
              these concepts in my mind for any future coding
              interviews. When someone runs the sorting visualizer,
              they can generate a random array of fixed size, and
              watch how the selected algorithm moves through the
              array. Though it may appear to be a simple project
              when you look at the final product, this is actually
              a very complex, time-consuming project to make
              because it requires a masterful understanding of not
              only the search algorithms, but also the representation
              of these animations in React.
            </p>
            <p>
              <a
                href="https://github.com/engineerdragon01/Sorting_Algo_Visualizer.git"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </p>
          </div>
        </Modal>

        {/* Contact */}
        <section id="contact" data-section="contact" className={visibleSections.has('contact') ? 'in-view' : ''}>
          <div className="inner-width section-reveal-content">
            <h1 className="section-title">How to Connect</h1>
            
            <div className="contact-container">
              {/* Contact Information Cards */}
              <div className="contact-info-wrapper">
                <h2 className="contact-subtitle">Get in Touch</h2>
                <div className="contact-info">
                  <a 
                    href="https://www.linkedin.com/in/adam-chois" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <i className="fab fa-linkedin-in"></i>
                    <div>
                      <h3>LinkedIn</h3>
                      <p>Connect with me</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:engineerdragon01@berkeley.edu"
                    className="contact-item"
                  >
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3>Email</h3>
                      <p>Send me a message</p>
                    </div>
                  </a>

                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3>Location</h3>
                      <p>Alameda, California, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h2 className="contact-subtitle">Send a Message</h2>
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  className="nameZone"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="emailZone"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                className="subjectZone"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                className="messageZone"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}
              <input
                type="submit"
                value={isSubmitting ? 'Sending...' : 'Send Message'}
                className="btn"
                disabled={isSubmitting}
              />
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="inner-width">
            <div className="copyright">
              &copy; 2026 | Created &amp; Designed By <span>Adam Chois</span>
            </div>
            <div className="sm">
              <a
                href="https://www.instagram.com/atom.chois/"
                className="fab fa-instagram"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              ></a>
              <a
                href="https://www.linkedin.com/in/adam-chois"
                className="fab fa-linkedin-in"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              ></a>
              <a
                href="https://github.com/engineerdragon01"
                className="fab fa-github"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              ></a>
            </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
