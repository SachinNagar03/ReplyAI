import "../../styles/Testimonials.css";

const quotes = [
  { q: "Saved me hours of writing emails every week. I open it before my inbox now.", name: "Maya R.", role: "Product Manager", color: "t-primary" },
  { q: "Perfect for professional communication. The tone control is genuinely useful.", name: "David L.", role: "Founder", color: "t-cyan" },
  { q: "I'm an introvert and hate writing replies. ReplyAI is my new best friend.", name: "Sana T.", role: "Designer", color: "t-pink" },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <p className="eyebrow">Loved by users</p>
          <h2 className="section-title">
            People can't stop <span className="text-gradient">using it</span>.
          </h2>
        </div>
        <div className="t-grid">
          {quotes.map(({ q, name, role, color }) => (
            <figure key={name} className="t-card glass">
              <blockquote>"{q}"</blockquote>
              <figcaption>
                <span className={`t-avatar ${color}`}>{name[0]}</span>
                <div>
                  <div className="t-name">{name}</div>
                  <div className="t-role">{role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
