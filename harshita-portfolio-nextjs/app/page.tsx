import { KeyboardHero } from "../components/keyboard-hero";
import { ProjectCard } from "../components/project-card";
import { SiteHeader } from "../components/site-header";
import { portfolio } from "../content/portfolio";

export default function HomePage() {
  const { profile } = portfolio;
  const featuredProjects = ["cloud", "chat"].flatMap((id) => portfolio.projects.filter((project) => project.id === id));
  const otherProjects = ["pose", "resume", "email"].flatMap((id) => portfolio.projects.filter((project) => project.id === id));

  return (
    <div id="portfolio">
      <div className="hr-inner">
        <SiteHeader />
        <main id="main-content">
          <KeyboardHero />
          <div className="hr-skills"><span>C# / .NET</span><span>React / TypeScript</span><span>Azure / AWS</span><span>Applied AI</span></div>

          <section className="hr-section" id="impact" aria-labelledby="impact-title">
            <div className="hr-section-label">ENGINEERING OUTCOMES AT COGNIZANT</div>
            <h2 id="impact-title">Engineering that makes<br />an <em>impact.</em></h2>
            <div className="hr-impact-grid">{portfolio.outcomes.map((item) => <div className="hr-impact-item" key={item.value}><div className="hr-impact-value">{item.value}</div><p>{item.label}</p></div>)}</div>
          </section>

          <section className="hr-section" id="work" tabIndex={-1} aria-labelledby="work-title">
            <div className="hr-section-top"><div><div className="hr-section-label">SELECTED WORK</div><h2 id="work-title">Selected <em>work.</em></h2></div><div className="hr-work-actions"><a className="hr-github-button" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub ↗</a></div></div>
            <div className="hr-project-grid">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
            <div className="hr-project-secondary-grid">{otherProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}</div>
            <div className="hr-projects-footer"><a href={profile.github} target="_blank" rel="noopener noreferrer">More projects and experiments on GitHub ↗</a></div>
          </section>

          <section className="hr-section hr-about" id="about" tabIndex={-1} aria-labelledby="about-title">
            <div><div className="hr-section-label">ENGINEERING APPROACH</div><h2 id="about-title">A software engineer.<br />A curious <em>builder.</em></h2><div className="hr-about-note">Clean code. Practical problem solving.</div><div className="hr-profile-facts"><span>{profile.professionalYears} years of professional experience</span><span>{profile.handsOnYears} years including hands on project work</span></div></div>
            <div>{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>

          <section className="hr-section hr-experience" id="experience" tabIndex={-1} aria-labelledby="experience-title">
            <div><div className="hr-section-label">PROFESSIONAL EXPERIENCE</div><h2 id="experience-title">Built on<br /><em>experience.</em></h2><p className="hr-experience-summary">{profile.professionalYears} years of professional experience.<br />{profile.handsOnYears} years including handson project work.</p></div>
            <div className="hr-timeline">{portfolio.roles.map((role) => <div className="hr-timeline-item" key={`${role.title}-${role.date}`}>
              <small>{role.date}</small><h3>{role.title}</h3><p>{role.summary}</p>
              {role.highlights.length > 0 && <details className="hr-role-details"><summary>Responsibilities and results</summary><ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></details>}
            </div>)}</div>
          </section>

          <section className="hr-section" id="skills" aria-labelledby="skills-title">
            <div className="hr-section-label">TECHNICAL EXPERTISE</div><h2 id="skills-title">The tools behind<br />the <em>work.</em></h2>
            <div className="hr-expertise-grid">{portfolio.skills.map((skill) => <div className="hr-expertise-item" key={skill.title}><h3>{skill.title}</h3><p>{skill.items}</p></div>)}</div>
          </section>

          <section className="hr-section" id="education" aria-labelledby="education-title">
            <div className="hr-section-label">EDUCATION</div><h2 id="education-title">An engineering<br /><em>foundation.</em></h2>
            <div className="hr-education-list">{portfolio.education.map((item) => <article className="hr-education-item" key={item.degree}>
              <div className="hr-education-date">{item.date}</div><div><h3>{item.degree}</h3><p>{item.institution}</p><span className="hr-education-grade">{item.grade}</span>{item.description && <p>{item.description}</p>}</div>
            </article>)}</div>
          </section>

          <section className="hr-contact" id="contact" tabIndex={-1} aria-labelledby="contact-title">
            <div className="hr-section-label">LET’S CONNECT</div><h2 id="contact-title">Let’s build<br />something <em>useful.</em></h2>
            <p>Open to Software Engineer and Full Stack Software Engineer<br />opportunities in Ireland/Remote/Global.</p>
            <div className="hr-contact-facts"><span>Fully eligible to work in Ireland with valid work authorization! | Immediately available</span><span> </span></div>
            <div className="hr-contact-links"><a className="hr-contact-action" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><a className="hr-contact-secondary" href={profile.phoneHref}>{profile.phone}</a><a className="hr-contact-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          </section>
        </main>
        <footer className="hr-footer"><span>© {new Date().getFullYear()} {profile.name} · Software engineer · Ireland</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></footer>
      </div>
    </div>
  );
}
