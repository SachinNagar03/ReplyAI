import { Check, Cpu, Mail, Sparkles } from "lucide-react";
import "../../styles/Solution.css";

const benefits = [
  "Instantly generate context-aware replies",
  "Pick the perfect tone in one click",
  "Save hours every week, sound great every time",
];

export default function Solution() {
  return (
    <section className="section">
      <div className="container">
        <div className="solution-grid">
          <div>
            <p className="eyebrow">The solution</p>
            <h2 className="section-title">
              Your AI co-pilot for <span className="text-gradient">every inbox</span>.
            </h2>
            <p className="solution-lead muted">
              ReplyAI reads the message, understands the intent, and drafts a response that
              actually sounds like you — only smarter, faster, and never tired.
            </p>
            <ul className="solution-list">
              {benefits.map((b) => (
                <li key={b}>
                  <span className="solution-check">
                    <Check size={12} color="hsl(var(--background))" strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="solution-flow-wrap">
            <div className="solution-flow-bg" />
            <div className="solution-flow">
              <div className="solution-flow-card glass animate-float">
                <Mail size={24} color="hsl(var(--muted-foreground))" />
                <p>Email in</p>
              </div>
              <div className="solution-core-wrap">
                <div className="solution-core glass animate-pulse-glow">
                  <Cpu size={40} color="hsl(var(--primary-glow))" />
                </div>
                <p className="solution-core-label">AI core</p>
              </div>
              <div className="solution-flow-card glass animate-float" style={{ animationDelay: "1.5s" }}>
                <Sparkles size={24} color="hsl(var(--accent-pink))" />
                <p>Reply out</p>
              </div>
            </div>
            <div className="solution-quote glass">
              "Honestly the first AI tool I actually use every morning." — beta tester
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
