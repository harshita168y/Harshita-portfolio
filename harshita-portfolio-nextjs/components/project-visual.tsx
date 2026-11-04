import { Container, Mail, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import type { PortfolioProject } from "../content/portfolio";

export function ProjectVisual({ project }: { project: PortfolioProject }) {
  return (
    <div className={`hr-project-art${project.visual === "chat" ? "" : ` hr-art-${project.visual}`}`}>
      <span className="hr-art-caption">{project.kicker}</span>
      {project.visual === "chat" && <>
        <div className="hr-mini-chat" aria-hidden="true">
          <div className="hr-mini-top"><b /><b /><b /><span>CHATZZZ</span></div>
          <div className="hr-bubble" /><div className="hr-bubble hr-bubble-other" />
        </div>
        <div className="hr-chat-tag"><ShieldCheck aria-hidden="true" /> Moderation in the flow</div>
      </>}
      {project.visual === "resume" && <>
        <div className="hr-doc" aria-hidden="true"><span>RESUME</span><i /><i /><i /><i /><i /></div>
        <div className="hr-doc hr-doc-two" aria-hidden="true"><span>THE ROLE</span><i /><i /><i /><i /><i /></div>
        <span className="hr-doc-seal" aria-hidden="true">↔</span>
      </>}
      {project.visual === "pose" && <>
        <div className="hr-pose-figure" aria-hidden="true">
          <span className="hr-pose-head" /><span className="hr-pose-body" />
          <span className="hr-limb hr-limb-a" /><span className="hr-limb hr-limb-b" />
          <span className="hr-limb hr-limb-c" /><span className="hr-limb hr-limb-d" />
        </div>
        <span className="hr-pose-label">CAMERA → LANDMARKS → FEEDBACK</span>
      </>}
      {project.visual === "cloud" && <div className="hr-cloud-box">
        <Container aria-hidden="true" /><div><strong>VibeMap</strong><small>Next.js · Docker · AWS</small></div>
      </div>}
      {project.visual === "workflow" && <div className="hr-workflow" aria-label="Gmail, language model, human review">
        <div className="hr-workflow-node"><Mail aria-hidden="true" />Gmail</div>
        <span className="hr-workflow-arrow" aria-hidden="true">→</span>
        <div className="hr-workflow-node"><Sparkles aria-hidden="true" />AI draft</div>
        <span className="hr-workflow-arrow" aria-hidden="true">→</span>
        <div className="hr-workflow-node"><UserCheck aria-hidden="true" />Review</div>
      </div>}
    </div>
  );
}
