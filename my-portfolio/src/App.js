import TypingAnimation from './components/TypingAnimation';
import { useState, useEffect } from 'react';

import './css/styles.css';
import './js/typing.js';

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

import modalImageOne from "./images/works/task.jpg";
import modalImageTwo from "./images/works/housing.jpg";
import modalImageThree from "./images/works/portfolioCode.jpg";
import modalImageFour from "./images/works/youtube.jpg";
import modalImageFive from "./images/works/adblock.png";
import modalImageSix from "./images/works/gitPic.jpeg";
import modalImageSeven from "./images/works/sudoku.jpg";
import modalImageEight from "./images/works/covid.jpg";
import modalImageNine from "./images/works/sorting.jpg";

import resume from './documents/Adam_Chois_Resume.pdf'

function Modal({ isOpen, onClose, children, header, projectType}) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-button" onClick={onClose}>&times;</span>
          <h2>{header}</h2>
          <h3>{projectType}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};



function App() {
  // GENERAL TODO:
  // LATER: Consider turning sections into components to make this a more pure React/comoponent-based app

  // NAVBAR TODO:
  // Format CSS styling

  // HOME TODO:

  // ABOUT TODO:
  // - Consider adding a carousel of pictures showing my interests and a couple key photos

  // PROJECTS TODO:
  // TODO: Fix linking to modal objects
  // - Consider adding a ref for each of the project tabs and making handleClick functions for each of them
  // IDEA: 3 rows static and have side arrow buttons to sort of carousel through the tiles

  // MODALS TODO:
  // TODO: Try adding modal.js code here to interact with project section
  // Refine CSS for the modals after fixing links to modals

  // CONTACT TODO:
  // TODO: Figure out a free email API for easy communication
  
  const [isModalOneOpen, setIsModalOneOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  const [isModalThreeOpen, setIsModalThreeOpen] = useState(false);
  const [isModalFourOpen, setIsModalFourOpen] = useState(false);
  const [isModalFiveOpen, setIsModalFiveOpen] = useState(false);
  const [isModalSixOpen, setIsModalSixOpen] = useState(false);
  const [isModalSevenOpen, setIsModalSevenOpen] = useState(false);
  const [isModalEightOpen, setIsModalEightOpen] = useState(false);
  const [isModalNineOpen, setIsModalNineOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const openModalOne = () => setIsModalOneOpen(true);
  const closeModalOne = () => setIsModalOneOpen(false);

  const openModalTwo = () => setIsModalTwoOpen(true);
  const closeModalTwo = () => setIsModalTwoOpen(false);

  const openModalThree = () => setIsModalThreeOpen(true);
  const closeModalThree = () => setIsModalThreeOpen(false);

  const openModalFour = () => setIsModalFourOpen(true);
  const closeModalFour = () => setIsModalFourOpen(false);

  const openModalFive = () => setIsModalFiveOpen(true);
  const closeModalFive = () => setIsModalFiveOpen(false);

  const openModalSix = () => setIsModalSixOpen(true);
  const closeModalSix = () => setIsModalSixOpen(false);

  const openModalSeven = () => setIsModalSevenOpen(true);
  const closeModalSeven = () => setIsModalSevenOpen(false);

  const openModalEight = () => setIsModalEightOpen(true);
  const closeModalEight = () => setIsModalEightOpen(false);

  const openModalNine = () => setIsModalNineOpen(true);
  const closeModalNine = () => setIsModalNineOpen(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
        setShowGoTop(true);
      } else {
        setIsSticky(false);
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle menu
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };
  
  return (
    <div className="App">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        <script src="js/scripts.js"></script>
      </head>
      <body>

        {/* Navbar */}
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <div className="inner-width">
            <a href="#home" className="logo"></a>
            <button className="menu-toggler">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="navbar-menu">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#education">Experience</a>
              <a href="#works">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Home */}
        <section id="home">
          <div className="inner-width">
            <div className="content">
              <TypingAnimation
                textList={["my name is Adam", "I'm an Engineer"]}
              />
              <br></br>
              <div className="sm">
                <a href="https://www.instagram.com/atom.chois/" className="fab fa-instagram"></a>
                <a href="https://www.linkedin.com/in/adam-chois" className="fab fa-linkedin-in"></a>
                <a href="https://github.com/engineerdragon01" className="fab fa-github"></a>
              </div>
              <div className="buttons">
                <a href="#contact">Contact Me</a>
                <a href={resume} download="AdamChoisResume">Download Resume</a>
              </div>
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <div className="inner-width">
            <h1 className="section-title">About</h1>
            <div className="about-content">
              <img src={profileImage} alt="" className="about-pic"/>
              <div className="about-text">
                <h2>Hi! My name is Adam Chois</h2>
                <p>
                  I'm a software engineer with a passion for creating tools and systems that make people's lives
                  easier and more efficient. Although my undergraduate degree is in Bioengineering, I focused most
                  of my learning on computer science, computational biology, and machine learning, which ultimately
                  led to my career pivot to software engineering. The vast array of technologies to learn, the excitement
                  of novel ideas and real-world needs being met, and the collaborative effort of project teams keep me enthusiastic
                  about software engineering and computer science well beyond my education. I hope that I can inspire
                  young and future engineers to solve the world's toughest problems because, at the end of the day, engineers
                  are problem solvers at their core.
                </p>
                <p>
                  Some fun facts about me are that I love legos and japanese nanoblocks, paint impressionistic and surrealistic art, play worship songs
                  on the acoustic guitar, and train brazilian jiu jitsu in my spare time.

                </p>
              </div>
            </div>
          </div>
        
          <div className="skills inner-width">
            <div className="skill">
              <div className="skill-info">
                <span>Python</span>
                <span>Very Proficient</span>
              </div>
              <div className="skill-bar py"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>Java</span>
                <span>Very Proficient</span>
              </div>
              <div className="skill-bar java"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar js"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>SQL</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar sql"></div>
            </div>
            
            <div className="skill">
              <div className="skill-info">
                <span>C++</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar cpp"></div>
            </div>
            
            <div className="skill">
              <div className="skill-info">
                <span>HTML</span>
                <span>Very Proficient</span>
              </div>
              <div class="skill-bar html"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>CSS</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar css"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>Bash</span>
                <span>Very Proficient</span>
              </div>
              <div className="skill-bar bash"></div>
            </div>
            
            <div className="skill">
              <div className="skill-info">
                <span>React.js</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar react"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>Vue.js</span>
                <span>Proficient</span>
              </div>
              <div className="skill-bar vue"></div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>Git</span>
                <span>Very Proficient</span>
              </div>
              <div className="skill-bar git"></div>
            </div>
            
            <div className="skill">
              <div className="skill-info">
                <span>Spring Boot</span>
                <span>Beginner</span>
              </div>
              <div className="skill-bar springBoot"></div>
            </div>
            
          </div>
        </section>

        {/* Services */}
        <section id="services" class="dark">
          <div className="inner-width">
            <h1 className="section-title">What I Do</h1>
            <div className="services">
              <div className="service">
                <i className="icon fas fa-dragon"></i>
                <h4>Vector Design</h4>
                <p>I make custom SVG images for websites and animations.</p>
              </div>

              <div className="service">
                <i className="icon fas fa-laptop"></i>
                <h4>Build WebApps</h4>
                <p>I build SaaS web applications from each end of the tech stack.</p>
              </div>

              <div className="service">
                <i className="icon fas fa-sitemap"></i>
                <h4>Practice Deep Learning</h4>
                <p>I'm learning to develop and train neural networks and create batch data.</p>
              </div>

              <div className="service">
                <i className="icon fas fa-database"></i>
                <h4>API Development</h4>
                <p>I devlop robust REST APIs for systems management platform projects.</p>
              </div>

              <div className="service">
                <i className="icon fas fa-gamepad"></i>
                <h4>Game Development</h4>
                <p>I'm learning how to design sprites and create 2D-scroller games.</p>
              </div>

              <div className="service">
                <i className="icon fas fa-video"></i>
                <h4>Drone Piloting</h4>
                <p>I have experience shooting quality video and image content for websites using Phantom 4 Pro Drones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="education">
          <div className="inner-width">
            <h1 className="section-title">Experience</h1>
            <div className="time-line">
              <div className="block">
                <h3>Veeva Systems, Associate Software Engineer in Test</h3>
                <h4>Jun 2023 - Present</h4>
                <p>
                  <ul>
                    <li>Implementing internal automation framework feature tests to improve the efficiency of QA and developer tools</li>
                    <li>Contributing QA and automation features for company-wide MySQL database foreign character support upgrade</li>
                    <li>Triaging defects on multiple pipelines to remedy development bottlenecks and increase production efficiency</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Genentech, Software Engineering Intern</h3>
                <h4>May 2022 - Aug 2022</h4>
                <p>
                  <ul>
                    <li>Contributed to a clinical protocol automation software tool that has immediate impact on clinical trial efficiency</li>
                    <li>Built an API that queries and downloads protocols and improves outdated healthcare document review processes</li>
                    <li>Designed and implemented UI for authoring and amending protocols to help med-writers review and edit faster</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>UC Berkeley-Arkin Lab, Undergraduate Researcher</h3>
                <h4>Apr 2022 - Aug 2022</h4>
                <p>
                  <ul>
                    <li>Partnered with NASA to build a python library that simulates missions to Mars and a synthetic biomanufactory</li>
                    <li>Designed improvements to modelling of crew member interactions and recycling of biomaterials in inventory</li>
                    <li>Developed gamification of simulation to make library tools more interactive and easier to use for scientists</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>UC Berkeley-Anderson Lab, Undergraduate Researcher</h3>
                <h4>Jan 2022 - May 2022</h4>
                <p>
                  <ul>
                    <li>Created a support vector machine to identify new metabolites based on chemical structure of natural molecules</li>
                    <li>Wrote Breadth First Search algorithm to enumerate the traversals from an ERO atom to the rest of a molecule</li>
                    <li>Migrated relevant enzyme feature data from older databases to a new database for faster and more efficient use</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>UC Berkeley-Nielsen Lab, Undergraduate Researcher</h3>
                <h4>Sep 2021 - Feb 2022</h4>
                <p>
                  <ul>
                    <li>Developed ML pattern recognition algorithm with Python and R for dorsal spot variations in Oophaga pumilio</li>
                    <li>Explored possible correlations between phenotypes like spot size and density, skin-color intensity, and toxicity</li>
                    <li>Analyzed and cross-referenced newly discovered genomic fragments of Oophaga pumilio island variations</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Amazon, Software Development Engineering Intern</h3>
                <h4>Jun 2021 - Aug 2021</h4>
                <p>
                  <ul>
                    <li>Utilized internal and external AWS tools for management and security of company data and API metrics</li>
                    <li>Developed internal APIs to improve onboarding data transfer efficiency and configuration by about 70% </li>
                    <li>Modelled API structure with internal XML and JSON frameworks and wrote team documentation for APIs</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Bayer, Quality Control Impurity Analysis/ELISA Intern</h3>
                <h4>Jun 2020 - Sep 2020</h4>
                <p>
                  <ul>
                    <li>Drafted financial data spreadsheets and presentations for company executives and project managers</li>
                    <li>Reviewed and revised research procedures and completed annual report detailing essential chemical components</li>
                    <li>Received professional training in Good Manufacturing Practices and medical Standard Operating Procedures</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Google, Student Programmer</h3>
                <h4>Jul 2019 - Aug 2019</h4>
                <p>
                  <ul>
                    <li>Learned software project management and design principles as well as fundamentals of Full-Stack Development</li>
                    <li>Received mentorship from lead software engineers at Google Headquarters</li>
                    <li>Developed a WebApp and gave a live project presentation to Google executives and employees</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Elk Grove Unified School District, Engineering Intern</h3>
                <h4>Jun 2018 - Aug 2018</h4>
                <p>
                  <ul>
                    <li>Organized teams and helped manage and oversee multimillion dollar construction sites for more than 30 schools</li>
                    <li>Managed professional content for district website, piloted Phantom 4 Pro Drones, and designed website user interface</li>
                    <li>Modeled and digitally restored blueprints of school facilities using Computer Aided Drawing on a daily basis</li>
                  </ul>
                </p>
              </div>

              <div className="block">
                <h3>Sungrove Church, Lead Sunday School Teacher</h3>
                <h4>Jan 2012 - Jun 2019</h4>
                <p>
                  <ul>
                    <li>Led team of volunteer Sunday School Teachers in a classroom with kids in 2nd through 5th grade</li>
                    <li>Met weekly to develop and create curriculum and lesson content for each Sunday session</li>
                    <li>Created games, bible lessons, and problem-management systems for future volunteers to succeed</li>
                  </ul>
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="works" className="dark">
          <div className="inner-width">
            <h1 className="section-title">Projects I'm Working On</h1>
            <div className="works">

              <div id="projOne" className="work" onClick={openModalOne}>
                <img src={projectOne} alt="" />
                <div className="info">
                  <h3>The Unit</h3>
                  <div className="cat">The Key to Task-Management</div>
                </div>
              </div>

              <div id="projTwo" className="work" onClick={openModalTwo}>
                <img src={projectTwo} alt="" />
                <div className="info">
                  <h3>Housing Hound</h3>
                  <div className="cat">Housing Made Simple</div>
                </div>
              </div>

              <div id="projThree" className="work" onClick={openModalThree}>
                <img src={projectThree} alt="" />
                <div className="info">
                  <h3>My Portfolio V2</h3>
                  <div className="cat">Introducing You to Me</div>
                </div>
              </div>

              <div id="projFour" className="work" onClick={openModalFour}>
                <img src={projectFour} alt="" />
                <div className="info">
                  <h3>Youtube Downloader</h3>
                  <div className="cat">Get Videos & Music for Offline Use</div>
                </div>
              </div>

              <div id="projFive" className="work" onClick={openModalFive}>
                <img src={projectFive} alt="" />
                <div className="info">
                  <h3>Ad Blocker</h3>
                  <div className="cat">Get Rid of Pesky Ads</div>
                </div>
              </div>

              <div id="projSix" className="work" onClick={openModalSix}>
                <img src={projectSix} alt="" />
                <div className="info">
                  <h3>Gitlet</h3>
                  <div className="cat">Git's Little Brother</div>
                </div>
              </div>

              <div id="projSeven" className="work" onClick={openModalSeven}>
                <img src={projectSeven} alt="" />
                <div className="info">
                  <h3>Sudoku Solver</h3>
                  <div className="cat">Backtracking, AI, & GUI</div>
                </div>
              </div>

              <div id="projEight" className="work" onClick={openModalEight}>
                <img src={projectEight} alt="" />
                <div className="info">
                  <h3>COVID Voice Assistant</h3>
                  <div className="cat">Ask and You Shall Receive... Information</div>
                </div>
              </div>

              <div id="projNine" className="work" onClick={openModalNine}>
                <img src={projectNine} alt="" />
                <div className="info">
                  <h3>Sorting Algorithm Visualizer</h3>
                  <div className="cat">Watch Some Sorting Action!</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modals */}

        <Modal 
              isOpen={isModalOneOpen} 
              onClose={closeModalOne} 
              header={"The Unit"} 
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={modalImageOne} alt=""/>
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
              <a href="https://github.com/engineerdragon01/unitproject-repo.git" target="_blank">View Code</a>
            </p>
          </div>

        </Modal>

        <Modal 
              isOpen={isModalTwoOpen} 
              onClose={closeModalTwo} 
              header={"Housing Hound"} 
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={modalImageTwo} alt="" />
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
              <a href="https://github.com/engineerdragon01/TreeHacks-2020.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>
        
        <Modal 
              isOpen={isModalThreeOpen} 
              onClose={closeModalThree}
              header={"My Portfolio V2"}
              projectType={"Web Application"}
        >
          <div className="modal-body">
            <img src={modalImageThree} alt="" />
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
              <a href="https://github.com/engineerdragon01/New-Portfolio.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={isModalFourOpen} 
              onClose={closeModalFour}
              header={"Youtube Downloader"}
              projectType={"Google Chrome Extension"}
        >
          <div className="modal-body">
            <img src={modalImageFour} alt="" />
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
              <a href="https://github.com/engineerdragon01/Youtube-Downloader-Extension.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={isModalFiveOpen} 
              onClose={closeModalFive}
              header={"Ad Blocker"}
              projectType={"Google Chrome Extension"}
        >
          <div className="modal-body">
            <img src={modalImageFive} alt="" />
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
              <a href="https://github.com/engineerdragon01/Ad-Blocker-Extension.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={isModalSixOpen} 
              onClose={closeModalSix}
              header={"Gitlet"}
              projectType={"Version-Control System"}
        >
          <div className="modal-body">
            <img src={modalImageSix} alt="" />
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
              isOpen={isModalSevenOpen} 
              onClose={closeModalSeven}
              header={"Sudoku Solver"}
              projectType={"Game w/ GUI"}
        >
          <div className="modal-body">
            <img src={modalImageSeven} alt="" />
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
              <a href="https://github.com/engineerdragon01/Sudoku-Solver-GUI.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={isModalEightOpen} 
              onClose={closeModalEight}
              header={"COVID Voice Assistant"}
              projectType={"Backend Voice Assistant"}
        >
          <div className="modal-body">
            <img src={modalImageEight} alt="" />
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
              <a href="https://github.com/engineerdragon01/Covid-Voice-Assistant.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        <Modal 
              isOpen={isModalNineOpen} 
              onClose={closeModalNine}
              header={"Sorting Algorithm Visualizer"}
              projectType={"React Visualizer"}
        >
          <div className="modal-body">
            <img src={modalImageNine} alt="" />
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
              <a href="https://github.com/engineerdragon01/Sorting_Algo_Visualizer.git" target="_blank">View Code</a>
            </p>
          </div>
        </Modal>

        {/* Contact */}
        <section id="contact">
          <div className="inner-width">
            <h1 className="section-title">How to Connect</h1>
            <div className="contact-info">
              <div className="item">
                <i className="fas fa-mobile-alt"></i>
                Connect With Me on LinkedIn
              </div>

              <div className="item">
                <i className="fas fa-envelope"></i>
                Email me
              </div>

              <div className="item">
                <i className="fas fa-map-marker-alt"></i>
                California, United States
              </div>
            </div>

            {/* <form class="contact-form" action="#">
              <input type="text" class="nameZone" placeholder="Your Full Name">
              <input type="email" class="emailZone" placeholder="Your Email">
              <input type="text" class="subjectZone" placeholder="Subject">
              <textarea class="messageZone" placeholder="Message"></textarea>
              <input type="submit" value="Send Message" class="btn">
            </form> */}
          </div>
        </section>

        <footer>
          <div className="inner-width">
            <div className="copyright">
              &copy; 2025 | Created & Designed By <a href="#">Adam Chois</a>
            </div>
            <div className="sm">
              <a href="https://www.instagram.com/atom.chois/" className="fab fa-instagram" target="_blank"></a>
              <a href="https://www.linkedin.com/in/adam-chois" className="fab fa-linkedin-in" target="_blank"></a>
              <a href="https://github.com/engineerdragon01" className="fab fa-github" target="_blank"></a>
            </div>
          </div>
        </footer>

        <button className="goTop fas fa-arrow-up" onClick={scrollToTop} ></button>
        <script src="js/typing.js"></script>
        <script src="js/modal.js"></script>

      </body>
    </div>
  );
}

export default App;
