import { ArrowRight } from "lucide-react";
import "../../styles/CTABanner.css";


export default function CTABanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-card glass">
          <div className="cta-bg animate-gradient" />
          <div className="cta-glow" />
          <div className="cta-inner">
            <h2 className="cta-title font-display">
              Build better emails. <br />
              <span className="text-gradient animate-gradient">Instantly.</span>
            </h2>
            <p className="cta-sub muted">
              Stop staring at the blinking cursor. Let ReplyAI write the first draft so you can ship the day.
            </p>
            <a href="#demo" className="btn btn-primary cta-btn">
              Start generating replies <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
