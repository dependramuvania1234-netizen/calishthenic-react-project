import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">
          <span className="highlight">HYBRID</span> Login
        </h2>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="login-footer">
            Don't have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
