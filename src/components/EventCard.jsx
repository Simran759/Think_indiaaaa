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
  const requiresRegistration = event.requiresRegistration !== false;

  return (
    <div className="event-card">
      {/* Banner */}
      <div className="event-banner">
        <img src={event.image} alt={event.title} />
        <div className="event-banner-overlay">
          <h3>{event.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="event-content">
        <p className="event-desc">{event.description}</p>

        <div className="event-meta">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
          <span>📍 {event.location}</span>
          {event.teamSize && <span>👥 Team size: {event.teamSize}</span>}
        </div>

        {/* ACTIONS */}
        <div className="event-actions">
          <div className="action-row">
            {/* Rulebook (only if exists) */}
            {event.rulebook && (
              <a
                href={event.rulebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rulebook-btn"
              >
                Rulebook
              </a>
            )}

            {/* Register */}
            {requiresRegistration ? (
              <button
                disabled={loading}
                onClick={() => onRegister(event)}
                className="register-btn"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            ) : (
              <span className="no-registration-badge">
                No Registration Required
              </span>
            )}

            {/* Join Team */}
            {requiresRegistration && event.isTeamEvent && (
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

          {/* No rulebook info (talks / kai po che) */}
          {requiresRegistration && !event.rulebook && (
            <p className="no-rulebook-note">
              ℹ This event does not have a rulebook.
            </p>
          )}

          {/* Join Team Box */}
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
