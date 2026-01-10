import React, { useEffect, useState } from "react";
import "./CompleteProfile.css";

export default function CompleteProfile() {
  const [phone, setPhone] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [loading, setLoading] = useState(true);
  const [name,setName] =useState("");

  // Protect this page
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
      .then(user => {
        if (user.isProfileComplete) {
          window.location.href = "/";
        } else {
          setLoading(false);
        }
      });
  }, []);

  function submitProfile(e) {
    e.preventDefault();

    fetch("http://localhost:5000/auth/complete-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        name:name,
        phone: phone,
        collegeId: collegeId
      })
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch(() => {
        alert("Failed to save profile");
      });
  }

  if (loading) return null;

  return React.createElement(
    "div",
    { className: "profile-page" },

    React.createElement(
      "form",
      { className: "profile-card", onSubmit: submitProfile },

      React.createElement("h2", null, "Complete Your Profile"),

      React.createElement(
        "p",
        { className: "subtitle" },
        "Please fill in the remaining details to continue."
      ),
      React.createElement("input", {
        type: "text",
        placeholder: "Name",
        value: name,
        required: true,
        onChange: e => setName(e.target.value)
      }),
      
      React.createElement("input", {
        type: "text",
        placeholder: "College ID / Roll Number",
        value: collegeId,
        required: true,
        onChange: e => setCollegeId(e.target.value)
      }),

      React.createElement("input", {
        type: "tel",
        placeholder: "Phone Number",
        value: phone,
        required: true,
        onChange: e => setPhone(e.target.value)
      }),
      

      React.createElement(
        "button",
        { type: "submit" },
        "Save & Continue"
      )
    )
  );
}
