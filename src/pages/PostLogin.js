import React, { useEffect } from "react";
import API_BASE_URL from "../config/api";

export default function PostLogin() {
  useEffect(() => {
    fetch(`${API_BASE_URL}/auth/me`, {
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
