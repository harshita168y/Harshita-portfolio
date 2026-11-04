"use client";

import { useState } from "react";
import type { PortfolioProject } from "../content/portfolio";
import { ProjectVisual } from "./project-visual";

const liveUrls: Partial<Record<PortfolioProject["id"], string>> = {
  cloud: "https://vibemap.online/",
  // Add other deployed URLs here: chat, resume, pose, email.
};

export function ProjectCard({ project, compact = false }: {
  project: PortfolioProject;
  compact?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailId = `project-${project.id}-detail`;
  const liveUrl = liveUrls[project.id];
  const githubUrl = project.link?.href.startsWith("https://github.com/")
    ? project.link.href
    : undefined;

  return (
    <article className={`hr-project${project.wide && !compact ? " hr-project-wide" : ""}${compact ? " hr-project-compact" : ""}`}>
      <div className="hr-project-preview">
        <ProjectVisual project={project} />

        <div className="hr-preview-links">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
            >
              View live application ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>

      <div className="hr-project-copy">
        <div className="hr-project-title">
          <h3>{project.title}</h3>
          <button
            className="hr-project-open"
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${project.title} project`}
            aria-expanded={expanded}
            aria-controls={detailId}
            onClick={() => setExpanded((open) => !open)}
          >
            <span aria-hidden="true">{expanded ? "−" : "↗"}</span>
          </button>
        </div>

        <p>{project.description}</p>
        <div className="hr-tags">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>

      <div
        id={detailId}
        className="hr-project-details"
        hidden={!expanded}
      >
        {expanded && (
          <>
            <strong>{project.detailTitle}</strong>
            {project.detail}
          </>
        )}
      </div>
    </article>
  );
}