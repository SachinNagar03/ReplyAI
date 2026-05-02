import { Sparkles } from "lucide-react";
import "../../styles/Nav.css";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#demo", label: "Demo" },
  { href: "#tech", label: "Tech" },
];

export default function Nav() {
  return (
    <header className="nav-root">
      <div className="nav-container">
        <nav className="nav-bar glass">
          <a href="#" className="nav-brand font-display">
            <span className="nav-logo animate-gradient">
              <Sparkles size={16} color="hsl(240 20% 6%)" />
            </span>
            ReplyAI
          </a>
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <a href="/GenerateReply" className="btn btn-primary btn-md">Try it now</a>
        </nav>
      </div>
    </header>
  );
}
