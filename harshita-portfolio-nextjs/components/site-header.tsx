"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "../content/portfolio";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    }
    function onOutsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutsideClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="hr-header" ref={headerRef}>
      <a className="hr-brand" href="#top" aria-label="Harshita Ramesh, home">
        <span className="hr-monogram" aria-hidden="true">hr</span>
        <span>{portfolio.profile.name}</span>
      </a>
      <nav id="main-navigation" className={`hr-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        <a href="#impact" onClick={() => setMenuOpen(false)}>Impact</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a className="hr-header-hello" href="#contact" onClick={() => setMenuOpen(false)}>Let’s Connect ↗</a>
      </nav>
      <button
        className="hr-mobile-toggle"
        type="button"
        ref={menuRef}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
    </header>
  );
}
