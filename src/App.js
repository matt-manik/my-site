import React, { useState, useEffect } from 'react';
import './App.css';
import profileImage from './assets/profile.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle smooth scrolling when navigation links are clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'experience', 'projects'];
      setScrollY(window.scrollY);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">Matthew Manik</div>
        <div className="nav-links">
          <button 
            className={activeSection === 'about' ? 'active' : ''} 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={activeSection === 'education' ? 'active' : ''} 
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'experience' ? 'active' : ''} 
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        {/* About Section */}
        <section id="about" className="section">
          <div className="section-container">
            <div className="profile-container">
              <div className="profile-image">
                <img src={profileImage} alt="Matthew Manik" />
              </div>
              <div className="profile-text">
                <h1>Hi, I'm Matthew Manik</h1>
                <h2>Information Science Graduate</h2>
                <p>
                  I'm a recent graduate from the University of Maryland with a passion for data science, 
                  software development, and analytics. I enjoy building data-driven applications and 
                  finding insights that drive business decisions.
                </p>
                <div className="contact-info">
                  <p><i className="icon">📧</i> zealandrio@gmail.com</p>
                  <p><i className="icon">📱</i> 301-917-4772</p>
                  <p><i className="icon">📍</i> D.C. Metro Area</p>
                </div>
                <div className="social-links">
                  <a href="https://linkedin.com/in/mattmanik" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/matt-manik" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="section-container">
            <h2 className="section-title">Education</h2>
            <div className="education-timeline">
              {/* Montgomery College */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="education-logo">
                    <div className="mc-logo">MC</div>
                  </div>
                  <div className="education-details">
                    <h3>Montgomery College</h3>
                    <p className="degree">Associate of Arts, Information Science</p>
                    <p className="date">August 2020 - December 2022</p>
                    <p className="gpa">GPA: 3.8</p>
                  </div>
                </div>
              </div>
              
              {/* University of Maryland */}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="education-logo">
                    <div className="umd-logo">UMD</div>
                  </div>
                  <div className="education-details">
                    <h3>University of Maryland</h3>
                    <p className="degree">Bachelor of Science, Information Science</p>
                    <p className="date">January 2023 - December 2024</p>
                    <p className="gpa">GPA: 4.0</p>
                    <p className="honors">Summa Cum Laude</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>AWS</h3>
                <ul className="skill-list">
                  <li>EC2</li>
                  <li>IAM</li>
                  <li>S3</li>
                  <li>Route 53</li>
                  <li>Certificate Manager</li>
                  <li>VPC</li>
                  <li>Security Hub</li>
                  <li>Cost Explorer</li>
                  <li>CloudWatch</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Programming</h3>
                <ul className="skill-list">
                  <li>Python</li>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>R</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>React</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Matplotlib</li>
                  <li>PyTorch</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Frameworks</h3>
                <ul className="skill-list">
                  <li>Agile</li>
                  <li>Microsoft Excel</li>
                  <li>Tableau</li>
                  <li>GitLab</li>
                  <li>GitHub</li>
                  <li>R Studio</li>
                  <li>MySQLWorkbench</li>
                  <li>Jupyter</li>
                  <li>Keras</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Science & Data Analytics Intern</h3>
                <p className="company">Dedrone – Sterling, VA</p>
                <p className="date">May 2024 – August 2024</p>
              </div>
              <ul className="experience-details">
                <li>Processed and analyzed datasets hosted on AWS using Python, Pandas, Matplotlib, Seaborn, Scikit-learn and SQL.</li>
                <li>Collaborated in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives.</li>
                <li>Conducted Exploratory Data Analysis (EDA) to uncover key insights for model improvement.</li>
                <li>Developed, evaluated and benchmarked various machine learning models for specific business use cases.</li>
                <li>Translated complex model outputs into actionable business insights.</li>
                <li>Delivered data-driven presentations to engineers, team leads, and product owners.</li>
              </ul>
            </div>
            <div className="experience-item">
              <div className="experience-header">
                <h3>President of InfoSci Connect Club</h3>
                <p className="company">University of Maryland – College Park</p>
                <p className="date">March 2024 – December 2024</p>
              </div>
              <ul className="experience-details">
                <li>Established the first Information Science club at the University of Maryland.</li>
                <li>Collaborated with UMD's advising and career development teams to organize workshops.</li>
                <li>Developed and delivered alumni panels and workshops for InfoSci students.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-list">
              <div className="project-item">
                <div className="project-header">
                  <h3>
                    <a href="https://github.com/matt-manik/electric_vehicles" target="_blank" rel="noopener noreferrer">
                      SQL Database Development
                    </a>
                  </h3>
                  <div className="project-skills">
                    <span>SQL</span>
                    <span>Python</span>
                    <span>Pandas</span>
                    <span>MySQL Workbench</span>
                  </div>
                </div>
                <p>
                  Led a team to develop an optimized database, reducing a 30,000-row dataset by 98% and 
                  improving query execution speed by 30%.
                </p>
              </div>

              <div className="project-item">
                <div className="project-header">
                  <h3>AWS Web Hosting</h3>
                  <div className="project-skills">
                    <span>AWS</span>
                    <span>CloudFront</span>
                    <span>S3</span>
                    <span>SSL/TLS</span>
                  </div>
                </div>
                <p>
                  Built a secure, high-performance static website using AWS CloudFront, S3, and SSL/TLS encryption, 
                  optimizing for global accessibility.
                </p>
              </div>

              <div className="project-item">
                <div className="project-header">
                  <h3>
                    <a href="https://public.tableau.com/app/profile/matthew.manik/viz/HumanErrorinAircraftAccidents/FinalStory" target="_blank" rel="noopener noreferrer">
                      Tableau Dashboard for Aviation Safety
                    </a>
                  </h3>
                  <div className="project-skills">
                    <span>Tableau</span>
                    <span>Python</span>
                    <span>Excel</span>
                    <span>Data Visualization</span>
                  </div>
                </div>
                <p>
                  Analyzed aviation accidents data (1962-2022), creating interactive visualizations of 
                  accident trends and geographical hotspots.
                </p>
              </div>

              <div className="project-item">
                <div className="project-header">
                  <h3>
                    <a href="https://github.com/wdelmo5123/UNO-INST326-Final-Project" target="_blank" rel="noopener noreferrer">
                      Uno: Defense Edition
                    </a>
                  </h3>
                  <div className="project-skills">
                    <span>Python</span>
                    <span>Git</span>
                    <span>JSON</span>
                    <span>OOP</span>
                  </div>
                </div>
                <p>
                  Led development of a strategic card game, implementing collaborative development practices 
                  and advanced Python features.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Matthew Manik. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
