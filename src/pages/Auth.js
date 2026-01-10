import React, { useEffect } from "react";
import "./auth.css";
import API_BASE_URL from "../config/api";

export default function Auth() {
  // 🚫 DO NOT show login page if already logged in
  useEffect(function () {
    fetch(`${API_BASE_URL}/auth/me`, {
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          window.location.href = "/post-login";
        }
      });
  }, []);

  function loginWithGoogle() {
    window.location.href = `${API_BASE_URL}/auth/google`;
  }

  return React.createElement(
    "div",
    { className: "auth-page" },

    React.createElement(
      "div",
      { className: "auth-card" },

      React.createElement(
        "div",
        { className: "auth-left" },
        React.createElement("img", {
          src: "/login.webp",
          alt: "Login"
        })
      ),

      React.createElement(
        "div",
        { className: "auth-right" },
        React.createElement("h2", null, "Continue your journey..."),
        React.createElement(
          "p",
          { className: "hint" },
          "Only ",
          React.createElement("b", null, "@mnit.ac.in"),
          " Google accounts are allowed"
        ),
        React.createElement(
          "button",
          { className: "google-btn", onClick: loginWithGoogle },
          "Continue with Google"
        )
      )
    )
  );
}
