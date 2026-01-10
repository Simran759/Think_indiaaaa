import React from "react";
import "./LoginFailed.css";

export default function LoginFailed() {
  function goBack() {
    window.location.href = "/login";
  }

  return React.createElement(
    "div",
    { className: "failed-page" },

    React.createElement(
      "div",
      { className: "failed-card" },

      React.createElement("h1", null, "Login Failed"),

      React.createElement(
        "p",
        null,
        "This portal is restricted to ",
        React.createElement("b", null, "@mnit.ac.in"),
        " Google accounts only."
      ),

      React.createElement(
        "button",
        { onClick: goBack },
        "Try Again with MNIT Email"
      )
    )
  );
}
