import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function analyze() {
    let score = 0;

    if (/urgent|immediately|now/i.test(text)) score += 30;
    if (/money|send|transfer|bitcoin|crypto/i.test(text)) score += 30;
    if (/http|www|link/i.test(text)) score += 20;

    if (score >= 60) setResult("⚠️ High Risk Scam");
    else if (score >= 30) setResult("⚠️ Medium Risk");
    else setResult("✅ Low Risk");
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>Scam Detector</h2>

      <textarea
        placeholder="Paste message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 120 }}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      <h3>{result}</h3>
    </div>
  );
}
