import React, { useState } from "react";
import "./index.css";

function App() {
  const platforms = {
    Twitter: 280,
    Facebook: 63206,
    Instagram: 2200,
    LinkedIn: 3000,
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platforms[platform];
  const remaining = limit - post.length;
  const percentage = Math.min((post.length / limit) * 100, 100);

  return (
    <div className="background">
      <div className="container">

        <h1>🚀 Social Media Post Composer</h1>
        <p className="subtitle">
          Create posts for different social media platforms
        </p>

        <label>Select Platform</label>

        <select
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value);
            setPost("");
          }}
        >
          {Object.keys(platforms).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <textarea
          rows="8"
          placeholder="✨ What's on your mind today?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="count">
          {post.length} / {limit} Characters
        </p>

        {remaining < 0 ? (
          <p className="error">
             ❌ Limit exceeded by {-remaining} characters
          </p>
        ) : (
          <p className="success">
             ✅ {remaining} characters remaining
          </p>
        )}

        <button
          disabled={remaining < 0 || post.length === 0}
          onClick={() => alert("🎉 Post Published Successfully!")}
        >
          Publish 🚀
        </button>
      </div>
    </div>
  );
}

export default App;