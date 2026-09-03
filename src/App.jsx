import "./App.css";
import heroImage from "./assets/hero.png";
import resume from "./assets/Sowmiya_k.pdf";

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 19 19 5" /><path d="M8 5h11v11" /></>,
    down: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
    brain: <><path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v1a3 3 0 0 0 3 3" /><path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v1a3 3 0 0 1-3 3" /><path d="M9 3v18M15 3v18M9 8h6M9 16h6" /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h.01M7 17h.01" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">Sowmiya<span>.</span></a>

        <div className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#writing">Writing</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="mailto:sowmiyasiva559@gmail.com">Let's talk <Icon name="arrow" /></a>
      </nav>

      <main>
        <section id="home" className="hero">
        <div className="hero-content">

          <h1>Hi, I'm<br /><span>Sowmiya Kumaresan</span></h1>

          <h2>AI Backend Engineer</h2>

          <p className="hero-description">
            I build the backend systems that make AI products reliable,
            scalable, and useful in production.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore my work <Icon name="arrow" />
            </a>

            <a href="#about" className="secondary-btn">More about me <Icon name="down" /></a>
          </div>

          <div className="profile-links" aria-label="Professional profiles">
            <a href={resume} target="_blank" rel="noreferrer">Resume <Icon name="arrow" /></a>
            <a href="https://www.linkedin.com/in/sowmiyak25/" target="_blank" rel="noreferrer">LinkedIn <Icon name="arrow" /></a>
            <a href="https://github.com/Ssowmiya25" target="_blank" rel="noreferrer">GitHub <Icon name="arrow" /></a>
            <a href="https://dev.to/sowmiya_siva_b02c3773f9f5" target="_blank" rel="noreferrer">DEV.to <Icon name="arrow" /></a>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-kicker">A little about me</p>
          <img className="hero-image" src={heroImage} alt="Abstract layered technology illustration" />
          <div className="code-card">
            <div className="code-line"><span className="line-number">01</span><span><b>name</b> = "Sowmiya Kumaresan"</span></div>
            <div className="code-line"><span className="line-number">02</span><span><b>role</b> = "AI Backend Engineer"</span></div>
            <div className="code-line"><span className="line-number">03</span><span><b>focus</b> = ["AI", "APIs", "scale"]</span></div>
            <div className="code-line"><span className="line-number">04</span><span><b>coffee</b> = True</span></div>
          </div>
          <div className="hero-note"> Building thoughtful systems, one API at a time.</div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><b>↓</b></a>
        </div>
        </section>

        <section id="about" className="section split-section">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT</p>
            <h2>Curious by nature.<br /><em>Precise by craft.</em></h2>
          </div>

          <div>
            <p className="section-text">I am an AI Backend Engineer with 1.5+ years of experience building scalable applications with Python and Django. I enjoy working where thoughtful product decisions meet robust engineering.</p>
            <div className="stats"><div><strong>1.5+</strong><span>Years experience</span></div><div><strong>08</strong><span>Core technologies</span></div><div><strong>∞</strong><span>Ideas to explore</span></div></div>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">02 / TOOLKIT</p>

          <h2>Tools for thoughtful work.</h2>

          <div className="skills-grid">

            <div className="skill-card">
              <h3><span className="skill-icon"><Icon name="brain" /></span>AI & LLM</h3>
            <p>
              LLMs, Generative AI, RAG, LangChain, LangGraph, MCP,
              OpenAI API, NLP
            </p>
            </div>

            <div className="skill-card">
              <h3><span className="skill-icon"><Icon name="server" /></span>Backend</h3>
            <p>
              Python, Django, Django REST Framework, Flask,
              REST APIs, WebSockets
            </p>
            </div>

            <div className="skill-card">
              <h3><span className="skill-icon"><Icon name="database" /></span>Databases</h3>
            <p>
              PostgreSQL, MySQL, SQLite, Redis,
              Qdrant, FAISS, Milvus
            </p>
            </div>

            <div className="skill-card">
              <h3><span className="skill-icon"><Icon name="layers" /></span>Async Systems</h3>
            <p>
              Celery, Redis, Event-driven architecture,
              Webhooks and background tasks
            </p>
            </div>

          </div>
        </section>

        <section id="writing" className="section writing-section">
          <p className="section-label">03 / TECHNICAL WRITING</p>

          <h2>Sharing what I learn.</h2>

          <div className="writing-card">
            <div className="writing-mark">DEV</div>
            <div>
              <h3>Articles on AI and backend engineering</h3>
              <p>Notes, practical lessons, and technical ideas from my work with Python, backend systems, and AI.</p>
            </div>
            <a href="https://dev.to/sowmiya_siva_b02c3773f9f5" target="_blank" rel="noreferrer">Visit my profile <Icon name="arrow" /></a>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-label">04 / EXPERIENCE</p>

          <h2>Where I've been building.</h2>

        <div className="timeline">

          <div className="experience-card">
            <span>Aug 2026 – Present</span>

            <h3>AI Backend Engineer</h3>

            <h4><a href="https://www.ninositsolution.com/" target="_blank" rel="noreferrer">Ninos IT Solution</a> · Chennai</h4>

            <p>
              Building reliable backend services and AI-powered product
              features with Python, Django, REST APIs and modern data systems.
            </p>

            <p>
              Working on production-ready integrations, scalable workflows
              and user-focused solutions for real-world business needs.
            </p>
          </div>

          <div className="experience-card">
            <span>Jun 2025 – Jul 2026</span>

            <h3>AI Python Developer</h3>

            <h4>Thaagam Foundation · Chennai</h4>

            <p>
              Developed scalable backend applications using Python, Django,
              Django REST Framework, PostgreSQL, Celery and Redis.
            </p>

            <p>
              Built REST APIs, webhook integrations, asynchronous task
              pipelines and real-time services using Django Channels
              and WebSockets.
            </p>
          </div>

          <div className="experience-card">
            <span>Oct 2024 – Mar 2025</span>

            <h3>AI Engineering Intern</h3>

            <h4>NCubeBeacons · Bangalore</h4>

            <p>
              Built data preprocessing and feature engineering pipelines
              using Python, Pandas and NumPy for machine learning
              applications.
            </p>

            <p>
              Worked with NLP, data visualization and analytics tools
              for AI-driven business solutions.
            </p>
          </div>

        </div>
        </section>

        <section id="projects" className="section projects-section">
          <p className="section-label">05 / SELECTED WORK</p>

          <h2>Ideas, made useful.</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="layers" /></span>01</div>

            <h3>CommAI</h3>

            <p>
              AI-powered omnichannel communication platform integrating
              WhatsApp, Instagram, Facebook Messenger and Email into
              a unified conversation system.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Django</span>
              <span>OpenAI</span>
              <span>Celery</span>
              <span>Redis</span>
            </div>

            <a
              href="https://commai.m7corporation.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="database" /></span>02</div>

            <h3>Business Intelligence Agent</h3>

            <p>
              AI-powered analytics platform that allows users to query
              structured datasets using natural language with multi-agent
              workflows and RAG.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>LangGraph</span>
              <span>OpenAI</span>
              <span>Qdrant</span>
              <span>PostgreSQL</span>
            </div>

            <span className="project-status">Private project · Details available on request</span>
          </div>

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="layers" /></span>03</div>

            <h3>KaduguDabba</h3>

            <p>
              A home food marketplace and delivery platform connecting
              customers, home-food sellers, delivery partners, and admins
              through one complete backend system.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Django</span>
              <span>DRF</span>
              <span>MySQL</span>
              <span>Redis</span>
              <span>WebSockets</span>
              <span>Razorpay</span>
              <span>AWS S3</span>
            </div>

            <span className="project-status">Backend platform · Marketplace, payments, delivery, and real-time systems</span>
          </div>

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="brain" /></span>03</div>

            <h3>Student Performance Analysis</h3>

            <p>Machine learning analysis project exploring student performance data to identify patterns and meaningful academic insights.</p>

            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>AI</span>
            </div>

            <a href="https://dev.to/sowmiya_siva_b02c3773f9f5/student-performance-analysis-226" target="_blank" rel="noreferrer">Read project <Icon name="arrow" /></a>
          </div>

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="brain" /></span>04</div>

            <h3>AI-Powered MCQ Generator</h3>

            <p>NLP and LSTM-based project for generating multiple-choice questions from learning content.</p>

            <div className="tags">
              <span>Python</span>
              <span>NLP</span>
              <span>LSTM</span>
            </div>

            <a href="https://dev.to/sowmiya_siva_b02c3773f9f5/ai-powered-mcq-generator-using-nlp-and-lstm-1h63" target="_blank" rel="noreferrer">Read project <Icon name="arrow" /></a>
          </div>

          <div className="project-card">
            <div className="project-number"><span className="project-icon"><Icon name="database" /></span>05</div>

            <h3>Customer Segmentation</h3>

            <p>RFM analysis project using customer purchase behavior to group online retail customers into useful segments.</p>

            <div className="tags">
              <span>Python</span>
              <span>Data Science</span>
              <span>K-Means</span>
            </div>

            <a href="https://dev.to/sowmiya_siva_b02c3773f9f5/customer-segmentation-using-rfm-analysis-in-online-retail-2fp3" target="_blank" rel="noreferrer">Read project <Icon name="arrow" /></a>
          </div>

        </div>
        </section>

        <section id="education" className="section compact-section">
          <p className="section-label">07 / EDUCATION</p>

        <h2>Education</h2>

        <div className="education-card">
          <h3>B.Tech in Information Technology</h3>

          <p>Paavai Engineering College</p>

          <span>2020 – 2024 · CGPA 8.86/10</span>
        </div>
        </section>

        <section className="section compact-section">
          <p className="section-label">08 / CERTIFICATIONS</p>

        <h2>Certifications</h2>

        <div className="certifications">
          <div className="cert-card">
            AI Engineer Core Track:
            LLM Engineering, RAG, QLoRA & Agents
          </div>

          <div className="cert-card">
            Google Data Analytics Professional Certificate
          </div>
        </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="section-label">09 / GET IN TOUCH</p>

        <h2>Let's build something amazing.</h2>

        <p>
          I'm open to conversations about AI infrastructure, backend roles,
          and interesting technical problems.
        </p>

        <a
          href="mailto:sowmiyasiva559@gmail.com"
          className="primary-btn"
        >
          <Icon name="mail" /> Email Me
        </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Sowmiya Kumaresan</p>
        <a href="mailto:sowmiyasiva559@gmail.com">sowmiyasiva559@gmail.com <span>↗</span></a>
      </footer>

    </div>
  );
}

export default App;