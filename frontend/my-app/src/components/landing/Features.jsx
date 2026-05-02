import { Zap, Palette, PencilLine, Bookmark, Gauge, ShieldCheck } from "lucide-react";
import "../../styles/Features.css";

const features = [
  { icon: Zap, title: "Instant AI Replies", desc: "Sub-second generation powered by streaming inference.", big: true },
  { icon: Palette, title: "Multiple Tones", desc: "Formal · Friendly · Casual · Apologetic · Confident." },
  { icon: PencilLine, title: "Editable Responses", desc: "Tweak any word inline before sending." },
  { icon: Bookmark, title: "Save Replies", desc: "Build a library of go-to responses." },
  { icon: Gauge, title: "Fast & Responsive", desc: "Snappy UI on every device." },
  { icon: ShieldCheck, title: "Secure Backend", desc: "Encrypted API · zero email storage." },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow">Features</p>
          <h2 className="section-title">
            Everything you need. <span className="text-gradient">Nothing you don't.</span>
          </h2>
        </div>

        <div className="features-grid">
          {features.map(({ icon: Icon, title, desc, big }) => (
            <div key={title} className={`feature-card glass ${big ? "feature-big" : ""}`}>
              {big && <div className="feature-blob" />}
              <div className="feature-icon">
                <Icon size={20} color="hsl(var(--background))" />
              </div>
              <h3 className={`feature-title font-display ${big ? "is-big" : ""}`}>{title}</h3>
              <p className="muted feature-desc">{desc}</p>
              {big && (
                <div className="feature-tags">
                  {["GPT-4o", "Streaming", "Context-aware", "Multi-language"].map((t) => (
                    <span key={t} className="feature-tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
