import { useState } from "react";

export default function JoinTeam() {
  const [code, setCode] = useState("");

  const join = async () => {
    const res = await fetch(
      "http://localhost:5000/api/registration/join-team",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamCode: code })
      }
    );

    if (!res.ok) {
      alert("Invalid or already registered");
      return;
    }

    alert("Joined team successfully");
  };

  return (
    <div>
      <h2>Join Team</h2>
      <input
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Enter Team Code"
      />
      <button onClick={join}>Join</button>
    </div>
  );
}
