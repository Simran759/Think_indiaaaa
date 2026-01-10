import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registrations, setRegistrations] = useState([]);
  const handleUnregister = async (eventId) => {
    const ok = window.confirm("Are you sure you want to unregister?");
    if (!ok) return;

    const res = await fetch(
      `http://localhost:5000/events/unregister/${eventId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (!res.ok) {
      const err = await res.json();
      alert(err.error || "Failed to unregister");
      return;
    }

    setRegistrations((prev) =>
      prev.filter((r) => r.eventId !== eventId)
    );
  };

  useEffect(function () {
    fetch("http://localhost:5000/auth/me", {
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) {
          window.location.href = "/login";
          return;
        }
        return res.json();
      })
      .then(data => {
        if (!data) return;

        // 🔐 FORCE PROFILE COMPLETION
        if (!data.isProfileComplete) {
          window.location.href = "/complete-profile";
          return;
        }

        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = "/login";
      });
  }, []);
  useEffect(() => {
  fetch("http://localhost:5000/events/my-registrations", {
    credentials: "include"
  })
    .then(res => res.json())
    .then(data => setRegistrations(data));
}, []);


  if (loading) return null;

return React.createElement(
  "div",
  { className: "dashboard-page" },

  // NAVBAR (TOP LEVEL)
  React.createElement(Navbar, null),

  // HEADER
  React.createElement(
    "div",
    { className: "dashboard-header" },
    React.createElement("h1", null, "Dashboard"),
    React.createElement(
      "button",
      {
        className: "logout-btn",
        onClick: function () {
          fetch("http://localhost:5000/auth/logout", {
            credentials: "include"
          }).then(() => (window.location.href = "/"));
        }
      },
      "Logout"
    )
  ),

  // USER INFO
  React.createElement(
    "div",
    { className: "card" },
    React.createElement("h3", null, "Your Details"),
    React.createElement("p", null, "Name: ", user.name),
    React.createElement("p", null, "Email: ", user.email),
    React.createElement("p", null, "Phone: ", user.phone),
    React.createElement("p", null, "College ID: ", user.collegeId)
  ),

  // EVENTS
registrations.map(reg =>
  React.createElement(
    "div",
    { key: reg.eventId, className: "registered-event" },

    React.createElement("p", null, "Event: ", reg.eventName),

    reg.isTeamEvent &&
      React.createElement(
        "div",
        { className: "team-box" },

        React.createElement(
          "p",
          { className: "team-code" },
          "Team Code: ",
          reg.teamCode
        ),

        React.createElement(
          "p",
          null,
          `Team Members (${reg.teamSize}/${reg.teamMaxSize})`
        ),

        React.createElement(
          "ul",
          null,
          reg.teamMembers.map(member =>
            React.createElement(
              "li",
              { key: member.id },
              `${member.name} (${member.email})`
            )
          )
        )
      ),

    React.createElement(
      "button",
      {
        className: "danger-btn",
        onClick: () => handleUnregister(reg.eventId)
      },
      "Unregister"
    )
  )
)


);
}