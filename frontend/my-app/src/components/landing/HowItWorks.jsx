import { ClipboardPaste, SlidersHorizontal, Wand2, Save } from "lucide-react";
import "../../styles/HowItWorks.css";

const steps = [
  { icon: ClipboardPaste, title: "Paste email", desc: "Drop in the email you received." },
  { icon: SlidersHorizontal, title: "Select tone", desc: "Formal, friendly, or casual — your call." },
  { icon: Wand2, title: "Generate reply", desc: "AI drafts a polished response instantly." },
  { icon: Save, title: "Edit & save", desc: "Tweak it, save it, send it." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="how-head">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">
            Four steps. <span className="text-gradient">Zero friction.</span>
          </h2>
        </div>
        <div className="how-wrap">
          <div className="how-line" />
          <div className="how-grid">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="how-item">
                <div className="how-icon">
                  <Icon size={24} color="hsl(var(--background))" />
                  <span className="how-num glass">{i + 1}</span>
                </div>
                <h3 className="how-title font-display">{title}</h3>
                <p className="muted how-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
