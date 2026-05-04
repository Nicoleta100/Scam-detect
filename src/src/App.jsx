import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function analyze() {
    let score = 0;

    if (/urgent|immediately|now/i.test(text)) score += 30;
    if (/money|send|transfer|bitcoin|crypto/i.test(text)) score += 40;
    if (/http|www|link/i.test(text)) score += 20;

    if (score >= 60) setResult("⚠️ High Risk Scam");
    else if (score >= 30) setResult("⚠️ Medium Risk");
    else setResult("✅ Low Risk");
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Scam Detect</h1>

      <textarea
        rows="6"
        style={{ width: "100%" }}
        placeholder="Paste suspicious message..."
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      <h2>{result}</h2>
    </div>
  );
}
