import { useState } from "react";
import { Wand2, Copy, Check } from "lucide-react";
import "../../styles/Demo.css";

const tones = ["Formal", "Friendly", "Casual"];

export default function Demo() {
  const [input, setInput] = useState("");
  const [tone, setTone] = useState("Formal");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
 const API_URL = import.meta.env.VITE_API_URL;


  const generate = async () => {
    if (!input.trim()) return;

    try {
      setLoading(true);
      setOutput("");

      const response = await fetch(`${API_URL}/api/generate-reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input,
          tone: tone.toLowerCase(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate reply");
      }

      setOutput(data.reply || "");
    } catch (error) {
      setOutput(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };


  const saveReply = async () => {
  if (!input.trim() || !output.trim()) return;

  try {
    const response = await fetch(`${API_URL}/api/generate-reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        originalEmail: input,
        generatedReply: output,
        tone: tone.toLowerCase()
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to save reply");
    }

    if (data.saved) {
      alert("Reply saved successfully");
    }

  } catch (error) {
    alert(error.message || "Something went wrong");
  }
};

  return (
    <section id="demo" className="section">
      <div className="container">
        <div className="demo-head">
          <p className="eyebrow">Live demo</p>
          <h2 className="section-title">
            Try it. <span className="text-gradient">Right now.</span>
          </h2>
          <p className="muted demo-sub">
            No signup. Just paste, pick a tone, and watch AI write.
          </p>
        </div>

        <div className="demo-wrap">
          <div className="demo-glow" />

          <div className="demo-card glass">
            <div className="demo-col">
              <label className="demo-label">Input email</label>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={6}
                className="demo-textarea"
                placeholder="Enter your message or email"
              />

              <div style={{ marginTop: "1rem" }}>
                <p className="demo-label" style={{ marginBottom: "0.5rem" }}>
                  Tone
                </p>

                <div className="demo-tones">
                  {tones.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      className={`demo-tone ${tone === t ? "is-active" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generate}
                disabled={loading}
                className="demo-generate"
              >
                <Wand2 size={16} />
                {loading ? "Generating..." : "Generate reply"}
              </button>
            </div>

            <div className="demo-col">
              <div className="demo-output-head">
                <label className="demo-label">Generated reply</label>

                {output && (
                  <button onClick={copy} className="demo-copy">
                    {copied ? (
                      <Check size={14} color="hsl(var(--accent-cyan))" />
                    ) : (
                      <Copy size={14} />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>

              <div className="demo-output">
                {output ? (
                  <>
                    <div
                      className="generated-email"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {output}
                    </div>

                    <button className="demo-save" onClick={saveReply}>Save reply</button>
                  </>
                ) : (
                  <p
                    style={{
                      color: "hsl(var(--muted-foreground) / .7)",
                    }}
                  >
                    Your AI-generated reply will appear here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
