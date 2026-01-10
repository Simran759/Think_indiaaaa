import React, { useEffect } from "react";

export default function PostLogin() {
  useEffect(() => {
    fetch("http://localhost:5000/auth/me", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(user => {
        if (!user.isProfileComplete) {
          window.location.href = "/complete-profile";
        } else {
          window.location.href = "/dashboard";
        }
      })
      .catch(() => {
        window.location.href = "/login";
      });
  }, []);

  return React.createElement("p", null, "Redirecting...");
}
