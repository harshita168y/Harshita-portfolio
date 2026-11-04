"use client";

import { MousePointer2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import { portfolio } from "../content/portfolio";

const keys = [
  {
    id: "experience",
    palette: "work",
    label: "Experience",
    number: "01",
    description: "View professional experience",
  },
  {
    id: "core",
    palette: "dotnet",
    label: "Core Stack",
    number: "02",
    description: "Explore my core technology stack",
  },
  {
    id: "cloud",
    palette: "cloud",
    label: "Cloud",
    number: "03",
    description: "View cloud certifications and learning",
  },
  {
    id: "ai",
    palette: "ai",
    label: "AI / CV",
    number: "04",
    description: "Explore AI and computer vision tools",
  },
  {
    id: "about",
    palette: "about",
    label: "About",
    number: "05",
    description: "Read about Harshita",
  },
  {
    id: "availability",
    palette: "contact",
    label: "Availability",
    number: "06",
    description: "View availability and work arrangements",
  },
  {
    id: "talk",
    palette: "space",
    label: "Let’s talk",
    number: "",
    description: "Let’s talk",
  },
] as const;

type KeyId = (typeof keys)[number]["id"];
type TopicId = "core" | "cloud" | "ai" | "availability";

const previews: Record<
  KeyId,
  { heading: string; items: readonly string[] }
> = {
  experience: {
    heading: "Experience",
    items: [
      `Professional experience — ${portfolio.profile.professionalYears} years`,
      `Including hands-on project work — ${portfolio.profile.handsOnYears} years`,
    ],
  },
  core: {
    heading: "Core technology stack",
    items: [
      portfolio.profile.coreStack.slice(0, 3).join(" · "),
      portfolio.profile.coreStack.slice(3).join(" · "),
    ],
  },
  cloud: {
    heading: "Cloud certifications & learning",
    items: portfolio.profile.certifications,
  },
  ai: {
    heading: "AI & computer vision tools",
    items: [
      portfolio.profile.aiTools.slice(0, 3).join(" · "),
      portfolio.profile.aiTools.slice(3).join(" · "),
      "Computer vision, NLP & LLM applications",
    ],
  },
  about: {
    heading: "A little about me",
    items: [
      "Enterprise modernisation",
      "Full-stack / Backend / Cloud",
      "Computer vision & applied AI",
    ],
  },
  availability: {
    heading: "Availability",
    items: [
      portfolio.profile.availability.status,
      portfolio.profile.availability.workModes.join(" · "),
    ],
  },
  talk: {
    heading: "Let’s start a conversation",
    items: [
      "A useful idea",
      "An interesting problem",
      "Something we could build",
    ],
  },
};

const topics: Record<TopicId, { title: string; text: string }> = {
  core: {
    title: "Core technology stack",
    text: portfolio.profile.coreStack.join(" · "),
  },
  cloud: {
    title: "Cloud certifications & learning",
    text: portfolio.profile.certifications.join(" · "),
  },
  ai: {
    title: "AI & computer vision",
    text: `${portfolio.profile.aiTools.join(" · ")}. Tools for computer vision, NLP, and LLM-powered applications.`,
  },
  availability: {
    title: "Availability",
    text: `${portfolio.profile.availability.status} · ${portfolio.profile.availability.workModes.join(" · ")}`,
  },
};

function isTopic(id: KeyId): id is TopicId {
  return (
    id === "core" ||
    id === "cloud" ||
    id === "ai" ||
    id === "availability"
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function KeyboardHero() {
  const [peek, setPeek] = useState<KeyId | null>(null);
  const [selected, setSelected] = useState<KeyId | null>(null);
  const [pressed, setPressed] = useState<KeyId | null>(null);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeTopic =
    selected && isTopic(selected) ? topics[selected] : null;

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function handlePress(id: KeyId) {
    if (timer.current) clearTimeout(timer.current);

    setPressed(id);
    timer.current = setTimeout(() => setPressed(null), 180);
    setPeek(null);

    if (isTopic(id)) {
      setSelected((current) => (current === id ? null : id));
      return;
    }

    setSelected(id);

    const target = document.getElementById(
      id === "talk" ? "contact" : id
    );

    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });

      target.focus({ preventScroll: true });
    }
  }

  function handlePointerMove(
    event: PointerEvent<HTMLButtonElement>
  ) {
    if (
      event.pointerType === "touch" ||
      prefersReducedMotion()
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const angle =
      ((event.clientX - bounds.left) / bounds.width) * 8 - 9;

    event.currentTarget.style.setProperty(
      "--hr-key-ry",
      `${angle.toFixed(1)}deg`
    );
  }

  return (
    <section
      className="hr-hero"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="hr-eyebrow">
        SOFTWARE ENGINEER · IRELAND
      </div>

      <h1 className="hr-greeting" id="hero-title">
        {portfolio.profile.greeting}
      </h1>

      <h2 className="hr-headline">
        {portfolio.profile.headlineLead}{" "}
        <em>{portfolio.profile.headlineAccent}</em>
      </h2>

      <p className="hr-intro">
        {portfolio.profile.tagline.map((item, index) => (
          <span key={item} className="hr-tagline-item">
            {index > 0 && <span aria-hidden="true">·</span>}
            {item}
          </span>
        ))}
      </p>

      <div className="hr-hero-actions">
        <a
          className="hr-primary-action"
          href={portfolio.profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore my work on GitHub <span aria-hidden="true">↗</span>
        </a>

        <a
          className="hr-secondary-action hr-resume-action"
          href="/resume/Harshita-Ramesh-Resume.pdf"
          download="Harshita-Ramesh-Resume.pdf"
        >
          Download Resume <span aria-hidden="true">↓</span>
        </a>

        <a className="hr-secondary-action" href="#contact">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hr-keyboard-wrap">
        <div
          className="hr-keyboard"
          role="group"
          aria-label="Explore my work and background"
        >
          {keys.map((key) => (
            <button
              key={key.id}
              className={[
                "hr-key",
                `hr-key-${key.palette}`,
                key.id !== "talk" && key.label.length > 8
                  ? "hr-key-long"
                  : "",
                pressed === key.id ? "hr-key-pressed" : "",
                selected === key.id ? "hr-key-selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              type="button"
              aria-label={key.description}
              aria-describedby={
                peek === key.id
                  ? `key-tooltip-${key.id}`
                  : undefined
              }
              aria-expanded={
                isTopic(key.id)
                  ? selected === key.id
                  : undefined
              }
              aria-controls={
                isTopic(key.id) ? "keyboard-topic" : undefined
              }
              onClick={() => handlePress(key.id)}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") {
                  setPeek(key.id);
                }
              }}
              onPointerLeave={(event) => {
                setPeek(null);
                event.currentTarget.style.removeProperty(
                  "--hr-key-ry"
                );
              }}
              onPointerMove={handlePointerMove}
              onFocus={() => setPeek(key.id)}
              onBlur={() => setPeek(null)}
            >
              <span className="hr-cap-top">
                {key.number && (
                  <span
                    className="hr-cap-shortcut"
                    aria-hidden="true"
                  >
                    {key.number}
                  </span>
                )}

                <span>{key.label}</span>

                {key.id === "talk" && (
                  <span aria-hidden="true">↵</span>
                )}
              </span>

              {peek === key.id && (
                <span
                  className="hr-peek hr-peek-visible"
                  id={`key-tooltip-${key.id}`}
                  role="tooltip"
                >
                  <span className="hr-peek-heading">
                    {previews[key.id].heading}
                  </span>

                  <span className="hr-peek-items">
                    {previews[key.id].items.join("\n")}
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="hr-key-help">
          <MousePointer2 aria-hidden="true" />
          A little curiosity. A key to explore.
        </p>

        <div
          id="keyboard-topic"
          className={`hr-topic-note${
            activeTopic ? " hr-topic-visible" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          {activeTopic && (
            <>
              <strong>{activeTopic.title}</strong>
              <span>{activeTopic.text}</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}