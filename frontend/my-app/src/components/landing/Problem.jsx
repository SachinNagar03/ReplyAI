import { Clock, Brain, AlertTriangle } from "lucide-react";
import "../../styles/Problem.css";

const items = [
  { icon: Clock, title: "Time-consuming", desc: "You spend 30+ minutes a day rewriting the same 'Got it, thanks!' fifty different ways." },
  { icon: Brain, title: "Tone is stressful", desc: "Too formal? Too cold? Too casual? Picking the right voice eats your energy." },
  { icon: AlertTriangle, title: "Easy to mess up", desc: "One wrong word in a client email can cost trust, deals, or a relationship." },
];

export default function Problem() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow">The problem</p>
          <h2 className="section-title">
            Email replies <span className="text-gradient">drain you</span> — every single day.
          </h2>
        </div>
        <div className="problem-grid">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="problem-card glass">
              <div className="problem-icon">
                <Icon size={20} color="hsl(var(--background))" />
              </div>
              <h3 className="problem-title font-display">{title}</h3>
              <p className="muted problem-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
