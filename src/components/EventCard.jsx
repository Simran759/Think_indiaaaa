import "./EventCard.css";

export default function EventCard({
  event,
  onRegister,
  onJoinTeam,
  loading,
  joining,
  onOpenJoin,
  teamCode,
  setTeamCode,
}) {
  return (
    <div className="event-card">
  <div className="event-banner">
    <img src={event.image} alt={event.title} />
    <div className="event-banner-overlay">
      <h3>{event.title}</h3>
    </div>
  </div>

  <div className="event-content">
    <p className="event-desc">{event.description}</p>

    <div className="event-meta">
      <span>📅 {event.date}</span>
      <span>⏰ {event.time}</span>
      <span>📍 {event.location}</span>
      {event.team_size && <span>👥 Team size: {event.team_size}</span>}
    </div>

    <div className="event-actions">
  {/* Rulebook */}
  <a
    href={event.rulebook}
    target="_blank"
    rel="noopener noreferrer"
    className="rulebook-btn"
  >
    Rulebook
  </a>

  {/* Register + Join row */}
  <div className="action-row">
    <button
      disabled={loading}
      onClick={() => onRegister(event)}
      className="register-btn"
    >
      {loading ? "Registering..." : "Register"}
    </button>

    {event.isTeamEvent && (
      <button className="join-btn" onClick={onOpenJoin}>
        Join Team
      </button>
    )}
  </div>

  {/* Google Form notice */}
  {event.googleForm && (
    <p className="google-note">
      ⚠ Registration is incomplete without filling the{" "}
      <a
        href={event.googleForm}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Form
      </a>
    </p>
  )}

  {/* Join team input */}
  {joining && (
    <div className="join-team-box">
      <input
        placeholder="Enter Team Code"
        value={teamCode}
        onChange={(e) => setTeamCode(e.target.value)}
      />
      <button
        disabled={loading}
        onClick={() => onJoinTeam(event)}
      >
        {loading ? "Joining..." : "Confirm"}
      </button>
    </div>
  )}
</div>
</div>
</div>

  );
}
