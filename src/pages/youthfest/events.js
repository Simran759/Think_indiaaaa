import { useState } from "react";
import events from "../../data/event";
import EventCard from "../../components/EventCard.jsx";
import "./events.css";
import Navbar from "../../components/youthfestNavbar.js";
import API_BASE_URL from "../../config/api";

export default function Events() {
  const [loadingId, setLoadingId] = useState(null);
  const [joiningEventId, setJoiningEventId] = useState(null);
  const [teamCode, setTeamCode] = useState("");

  // REGISTER / CREATE TEAM
  const handleRegister = async (event) => {
    setLoadingId(event.id);

    const me = await fetch(`${API_BASE_URL}/auth/me`, {
      credentials: "include",
    });

    if (!me.ok) {
      window.location.href = "/login";
      return;
    }

    const user = await me.json();
    if (!user.isProfileComplete) {
      window.location.href = "/complete-profile";
      return;
    }

    const res = await fetch(`${API_BASE_URL}/events/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: event.id,
        eventName: event.title,
        isTeamEvent: event.isTeamEvent,
        teamSize: event.teamSize,
      }),
    });

    const data = await res.json();
    setLoadingId(null);

    if (!res.ok) {
      alert(data.message || "Already registered");
      return;
    }

    if (data.teamCode) {
      alert(`Registered!\nTeam Code: ${data.teamCode}`);
    } else {
      alert("Registered successfully!");
    }
  };

  // JOIN EXISTING TEAM
  const handleJoinTeam = async (event) => {
    if (!teamCode.trim()) {
      alert("Enter team code");
      return;
    }

    setLoadingId(event.id);

    const res = await fetch(`${API_BASE_URL}/events/join-team`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: event.id,
        teamCode: teamCode.trim(),
      }),
    });

    const data = await res.json();

    setLoadingId(null);
    setJoiningEventId(null);
    setTeamCode("");

    if (!res.ok) {
      alert(data.message || "Failed to join team");
      return;
    }

    alert("Joined team successfully!");
  };

  return (
    <div className="event-page">
      <Navbar />

      <h1 className="event-title">Events</h1>
      <p className="event-subtitle">
        Explore events and register to participate
      </p>

      <div className="eventS-grid">
        {events.map((ev) => (
          <EventCard
            key={ev.id}
            event={ev}
            loading={loadingId === ev.id}
            joining={joiningEventId === ev.id}
            teamCode={teamCode}
            setTeamCode={setTeamCode}
            onRegister={handleRegister}
            onJoinTeam={handleJoinTeam}
            onOpenJoin={() => setJoiningEventId(ev.id)}
          />
        ))}
      </div>
    </div>
  );
}
