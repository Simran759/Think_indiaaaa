import React, { useState, useEffect } from "react";
import "./auth.css";
import API_BASE_URL from "../config/api";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  // 🚫 DO NOT show login page if already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
          credentials: "include"
        });
        if (response.ok) {
          window.location.href = "/post-login";
        }
      } catch (err) {
        console.log("Not authenticated, showing login page");
      }
    };
    checkAuth();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password, name: formData.name };

      console.log(`Making request to: ${API_BASE_URL}${endpoint}`);
      
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      window.location.href = "/post-login";
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error. Please check if backend is running at " + API_BASE_URL);
    } finally {
      setLoading(false);
    }
  };

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

        React.createElement("h2", null, isLogin ? "Welcome Back" : "Create Account"),

        React.createElement(
          "form",
          { onSubmit: handleSubmit },

          // Name field (only for register)
          !isLogin && React.createElement(
            React.Fragment,
            null,
            React.createElement("input", {
              type: "text",
              name: "name",
              placeholder: "Full Name",
              value: formData.name,
              onChange: handleChange,
              required: true,
              className: "auth-input"
            })
          ),

          // Email field
          React.createElement("input", {
            type: "email",
            name: "email",
            placeholder: "Email",
            value: formData.email,
            onChange: handleChange,
            required: true,
            className: "auth-input"
          }),

          // Password field
          React.createElement("input", {
            type: "password",
            name: "password",
            placeholder: "Password",
            value: formData.password,
            onChange: handleChange,
            required: true,
            className: "auth-input"
          }),

          // Error message
          error && React.createElement(
            "div",
            { className: "error-message" },
            error
          ),

          // Submit button
          React.createElement(
            "button",
            {
              type: "submit",
              disabled: loading,
              className: "auth-btn"
            },
            loading ? "Please wait..." : (isLogin ? "Login" : "Register")
          )
        ),

        // Toggle between login and register
        React.createElement(
          "p",
          { className: "toggle-text" },
          isLogin ? "Don't have an account? " : "Already have an account? ",
          React.createElement(
            "button",
            {
              type: "button",
              onClick: () => {
                setIsLogin(!isLogin);
                setError("");
                setFormData({ email: "", password: "", name: "" });
              },
              className: "toggle-btn"
            },
            isLogin ? "Register" : "Login"
          )
        )
      )
    )
  );
}
