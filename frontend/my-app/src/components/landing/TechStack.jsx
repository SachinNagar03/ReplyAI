import "../../styles/TechStack.css";

const stack = [
  { group: "Frontend", items: ["React.js", "Plain CSS", "Responsive UI"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST API"] },
  { group: "Database", items: ["MongoDB", "Mongoose"] },
  { group: "AI", items: ["OpenAI API", "GPT-4o", "Streaming"] },
];

export default function TechStack() {
  return (
    <section id="tech" className="section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow">Tech stack</p>
          <h2 className="section-title">
            Built on a <span className="text-gradient">production-grade</span> stack.
          </h2>
        </div>
        <div className="tech-grid">
          {stack.map(({ group, items }) => (
            <div key={group} className="tech-card glass">
              <p className="tech-group">{group}</p>
              <ul className="tech-list">
                {items.map((it) => (
                  <li key={it}><span className="tech-dot" />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
