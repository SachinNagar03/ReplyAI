import { Github, Twitter, Linkedin, Sparkles } from "lucide-react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand font-display">
            <span className="footer-logo">
              <Sparkles size={14} color="hsl(var(--background))" />
            </span>
            ReplyAI
          </div>
          <p className="footer-desc muted">
            Smart email reply generator. Built with React, Node, MongoDB, and OpenAI.
          </p>
          <p className="footer-credit">
            Crafted by <span>Your Name</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-icon glass"><Github size={16} /></a>
            <a href="#" aria-label="Twitter" className="footer-icon glass"><Twitter size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="footer-icon glass"><Linkedin size={16} /></a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} ReplyAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
