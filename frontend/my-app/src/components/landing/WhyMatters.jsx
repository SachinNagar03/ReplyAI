import { Plug, Layers, Workflow, Lock, Target } from "lucide-react";
import "../../styles/WhyMatters.css";

const items = [
  { icon: Plug, title: "AI API integration", desc: "Real-world usage of OpenAI's API with streaming responses." },
  { icon: Layers, title: "Clean architecture", desc: "Modular backend with clear separation of concerns." },
  { icon: Workflow, title: "Async data handling", desc: "Robust async flows, retries, and graceful failures." },
  { icon: Lock, title: "Secure config", desc: "Environment isolation and zero secret leaks." },
  { icon: Target, title: "Real problem solved", desc: "Built for an everyday pain people actually feel." },
];

export default function WhyMatters() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow">Why this project matters</p>
          <h2 className="section-title">
            More than a demo — <span className="text-gradient">a craft.</span>
          </h2>
        </div>
        <div className="why-grid">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="why-card glass">
              <Icon size={20} color="hsl(var(--primary-glow))" />
              <h3 className="why-title font-display">{title}</h3>
              <p className="muted why-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
