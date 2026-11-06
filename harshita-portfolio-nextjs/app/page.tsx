import { KeyboardHero } from "../components/keyboard-hero";
import { ProjectCard } from "../components/project-card";
import { SiteHeader } from "../components/site-header";
import { portfolio } from "../content/portfolio";

export default function HomePage() {
  const { profile } = portfolio;
  const vibeMap = portfolio.projects.find((project) => project.id === "cloud");
  const otherProjects = ["pose", "resume", "email", "chat"].flatMap((id) =>
    portfolio.projects.filter((project) => project.id === id)
  );

  return (
    <div id="portfolio">
      <div className="hr-inner">
        <SiteHeader />

        <main id="main-content">
          <KeyboardHero />

          <div className="hr-skills">
            <span>C# / .NET</span>
            <span>React / TypeScript</span>
            <span>Azure / AWS</span>
            <span>Applied AI</span>
          </div>

          <section className="hr-section" id="impact" aria-labelledby="impact-title">
            <div className="hr-section-label">01 / ENGINEERING OUTCOMES</div>
            <h2 id="impact-title">
              Engineering that makes<br />an <em>impact.</em>
            </h2>

            <div className="hr-impact-grid">
              {portfolio.outcomes.map((item) => (
                <div className="hr-impact-item" key={item.value}>
                  <div className="hr-impact-value">{item.value}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="hr-section"
            id="work"
            tabIndex={-1}
            aria-labelledby="work-title"
          >
            <div className="hr-section-top">
              <div>
                <div className="hr-section-label">02 / SELECTED WORK</div>
                <h2 id="work-title">Selected <em>work.</em></h2>
              </div>

              <div className="hr-work-actions">
                <p className="hr-section-sub">
                  Full-stack systems, cloud infrastructure,<br />
                  real-time communication, and applied AI.
                </p>
                <a
                  className="hr-github-button"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub ↗
                </a>
              </div>
            </div>

            <div className="hr-project-grid">
              {vibeMap && <ProjectCard project={vibeMap} />}

              <article className="hr-project">
                <div className="hr-project-art" style={{ background: "#f3e8dc" }}>
                  <span className="hr-art-caption" style={{ color: "#78543e" }}>
                    COMPUTER VISION / RHYTHM GAME
                  </span>

                  <svg
                    aria-hidden="true"
                    width="300"
                    height="128"
                    viewBox="0 0 300 128"
                    style={{ maxWidth: "84%" }}
                  >
                    <rect x="38" y="10" width="224" height="108" rx="13" fill="#33251f" />
                    <path d="M94 10v108M150 10v108M206 10v108" stroke="#795743" />

                    <rect x="44" y="27" width="44" height="29" rx="5" fill="#b57750" />
                    <rect x="100" y="76" width="44" height="31" rx="5" fill="#e6b36c" />
                    <rect x="156" y="50" width="44" height="30" rx="5" fill="#9d674d" />
                    <rect x="212" y="22" width="44" height="29" rx="5" fill="#c38c5e" />

                    <path
                      d="M132 76 121 60 110 52 106 43M121 60 124 42 122 30M121 60 136 42 139 29M126 68 146 53 151 40M132 76 148 67 158 59"
                      fill="none"
                      stroke="#fff0d6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g fill="#fff0d6">
                      <circle cx="106" cy="43" r="2.5" />
                      <circle cx="122" cy="30" r="2.5" />
                      <circle cx="139" cy="29" r="2.5" />
                      <circle cx="151" cy="40" r="2.5" />
                      <circle cx="158" cy="59" r="2.5" />
                      <circle cx="132" cy="76" r="3" />
                    </g>
                  </svg>

                  <a
                    className="hr-project-link"
                    href="https://github.com/harshita168y/AirStudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Air Studio on GitHub"
                    style={{
                      position: "absolute",
                      right: 12,
                      bottom: 12,
                      padding: "7px 10px",
                      border: "1px solid #d9c0ae",
                      borderRadius: 5,
                      background: "#fff",
                    }}
                  >
                    GitHub ↗
                  </a>
                </div>

                <div className="hr-project-copy">
                  <h3>Air Studio</h3>
                  <p>
                    A browser rhythm game inspired by Piano Tiles. Your webcam
                    tracks your hand so you can hit tiles in time with the music
                    by tapping the air.
                  </p>

                  <div className="hr-tags">
                    <span>Computer vision</span>
                    <span>Hand tracking</span>
                    <span>Rhythm game</span>
                  </div>
                </div>
              </article>
            </div>

            <div
              className="hr-project-secondary-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
                alignItems: "start",
              }}
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>

            <div className="hr-projects-footer">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                More projects and experiments on GitHub ↗
              </a>
            </div>
          </section>

          <section
            className="hr-section hr-about"
            id="about"
            tabIndex={-1}
            aria-labelledby="about-title"
          >
            <div>
              <div className="hr-section-label">03 / ENGINEERING APPROACH</div>
              <h2 id="about-title">
                A software engineer.<br />A curious <em>builder.</em>
              </h2>
              <div className="hr-about-note">Clean code. Practical problem solving.</div>
              <div className="hr-profile-facts">
                <span>{profile.professionalYears} years of professional experience</span>
                <span>{profile.handsOnYears} years including hands-on project work</span>
              </div>
            </div>

            <div>
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section
            className="hr-section hr-experience"
            id="experience"
            tabIndex={-1}
            aria-labelledby="experience-title"
          >
            <div>
              <div className="hr-section-label">04 / PROFESSIONAL EXPERIENCE</div>
              <h2 id="experience-title">Built on<br /><em>experience.</em></h2>
              <p className="hr-experience-summary">
                {profile.professionalYears} years of professional experience.<br />
                {profile.handsOnYears} years including hands-on project work.
              </p>
            </div>

            <div className="hr-timeline">
              {portfolio.roles.map((role) => (
                <div className="hr-timeline-item" key={`${role.title}-${role.date}`}>
                  <small>{role.date}</small>
                  <h3>{role.title}</h3>
                  <p>{role.summary}</p>
                  {role.highlights.length > 0 && (
                    <details className="hr-role-details">
                      <summary>Responsibilities and results</summary>
                      <ul>
                        {role.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="hr-section" id="skills" aria-labelledby="skills-title">
            <div className="hr-section-label">05 / TECHNICAL EXPERTISE</div>
            <h2 id="skills-title">The tools behind<br />the <em>work.</em></h2>

            <div className="hr-expertise-grid">
              {portfolio.skills.map((skill) => (
                <div className="hr-expertise-item" key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="hr-section" id="education" aria-labelledby="education-title">
            <div className="hr-section-label">06 / EDUCATION</div>
            <h2 id="education-title">An engineering<br /><em>foundation.</em></h2>

            <div className="hr-education-list">
              {portfolio.education.map((item) => (
                <article className="hr-education-item" key={item.degree}>
                  <div className="hr-education-date">{item.date}</div>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                    <span className="hr-education-grade">{item.grade}</span>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="hr-contact"
            id="contact"
            tabIndex={-1}
            aria-labelledby="contact-title"
          >
            <div className="hr-section-label">07 / LET’S CONNECT</div>
            <h2 id="contact-title">Let’s build<br />something <em>useful.</em></h2>
            <p>
              Open to Software Engineer and Full-Stack Software Engineer<br />
              opportunities in Ireland.
            </p>

            <div className="hr-contact-facts">
              <span>Fully eligible to work in Ireland</span>
              <span>Immediately available</span>
            </div>

            <div className="hr-contact-links">
              <a className="hr-contact-action" href={`mailto:${profile.email}`}>
                {profile.email} <span aria-hidden="true">↗</span>
              </a>
              <a className="hr-contact-secondary" href={profile.phoneHref}>
                {profile.phone}
              </a>
              <a
                className="hr-contact-secondary"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </section>
        </main>

        <footer className="hr-footer">
          <span>© {new Date().getFullYear()} {profile.name} · Software engineer · Ireland</span>
          <div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
