import { useEffect, useState } from "react";
import "../styles/Demo.css";
import "../styles/SavedReplies.css";

export default function SavedReplies() {
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(true);
 const API_URL = import.meta.env.VITE_API_URL;
  
  const fetchReplies = async () => {
    try {
      const response = await fetch(`${API_URL}/api/replies`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch replies");
      }

      setReplies(data.replies || []);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReplies();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="demo-head">
          <p className="eyebrow">Saved replies</p>
          <h2 className="section-title">
            Your <span className="text-gradient">saved emails</span>
          </h2>
          <p className="muted demo-sub">
            View all the replies you saved earlier.
          </p>
        </div>

        <div className="saved-wrap">
          <div className="demo-glow" />

          <div className="saved-list">
            {loading ? (
              <div className="demo-card glass">
                <p style={{ color: "hsl(var(--muted-foreground))" }}>
                  Loading replies...
                </p>
              </div>
            ) : replies.length > 0 ? (
              replies.map((reply) => (
                <div key={reply._id} className="demo-card glass saved-card">
                  <div className="saved-head">
                    <span className="demo-tone is-active">
                      {reply.tone}
                    </span>

                    <span className="saved-date">
                      {new Date(reply.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="saved-block">
                    <p className="demo-label">Original email</p>
                    <div
                      className="demo-output"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {reply.originalEmail}
                    </div>
                  </div>

                  <div className="saved-block">
                    <p className="demo-label">Generated reply</p>
                    <div
                      className="demo-output"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {reply.generatedReply}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="demo-card glass">
                <p style={{ color: "hsl(var(--muted-foreground))" }}>
                  No saved replies found.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}