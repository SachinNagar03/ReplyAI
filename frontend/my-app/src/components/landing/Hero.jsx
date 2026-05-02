import { ArrowRight, Mail, Wand2, Send, Zap } from "lucide-react";
import "../../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Hero() {
  const navigator = useNavigate();
  return (
    <section className="hero">
      <div className="hero-grid grid-bg" />
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-cols">
          <div className="animate-fade-up">
            <div className="hero-badge glass">
              <Zap size={14} color="hsl(var(--accent-cyan))" />
              Powered by GPT · New release
            </div>
            <h1 className="hero-title font-display">
              Write <span className="text-gradient animate-gradient">perfect</span> email replies in seconds.
            </h1>
            <p className="hero-sub muted">
              Turn any email into a professional, on-tone response using AI.
              Paste it in, pick a vibe, and ship a reply you'd be proud to send.
            </p>
            <div className="hero-steps">
              {["Paste", "Tone", "Generate", "Send"].map((s, i) => (
                <span key={s} className="hero-step">
                  <span className="hero-step-pill glass">{s}</span>
                  {i < 3 && <ArrowRight size={14} style={{ opacity: .5 }} />}
                </span>
              ))}
            </div>
            <div className="hero-ctas">

              <Link to="/GenerateReply" className="btn btn-primary btn-lg">
                Try it now <ArrowRight size={16} />
              </Link>

              <a href="#how" className="btn btn-outline btn-lg">See how it works</a>
            </div>
            <div className="hero-social">
              <div className="hero-avatars">
                <span className="ha ha-1" />
                <span className="ha ha-2" />
                <span className="ha ha-3" />
              </div>
              Loved by 12,000+ professionals
            </div>
          </div>

          <div className="hero-mock-wrap animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="hero-mock-glow animate-pulse-glow" />
            <div className="hero-mock glass">
              <div className="hero-mock-bar">
                <span className="dot dot-r" />
                <span className="dot dot-y" />
                <span className="dot dot-g" />
                <span className="hero-mock-title">replyai · compose</span>
              </div>
              <div className="hero-mock-body">
                <div className="hero-incoming">
                  <div className="hero-incoming-from">
                    <Mail size={14} /> Incoming · Sarah K.
                  </div>
                  <p>Can you send the report by tomorrow?</p>
                </div>
                <div className="hero-tones">
                  {["Formal", "Friendly", "Casual"].map((t, i) => (
                    <span key={t} className={`hero-tone ${i === 0 ? "is-active" : ""}`}>{t}</span>
                  ))}
                </div>
                <div className="hero-reply">
                  <div className="hero-reply-label">
                    <Wand2 size={14} /> AI generated
                  </div>
                  <p className="cursor-blink">
                    Thank you for your message. I'll ensure the report is finalized and shared with you by end of day tomorrow.
                  </p>
                </div>
                <button className="hero-send" onClick={()=>navigator("/GenerateReply")} >
                  Send reply <Send size={16} />
                </button>
              </div>
            </div>
            <div className="hero-chip glass animate-float">
              <Zap size={14} color="hsl(var(--accent-cyan))" /> 0.8s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
