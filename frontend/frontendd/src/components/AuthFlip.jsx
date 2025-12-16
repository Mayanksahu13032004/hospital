import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "../styles/authFlip.css";

export default function AuthFlip() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="auth-page">
      <div className={`auth-card ${flip ? "flipped" : ""}`}>
        
        {/* FRONT → LOGIN */}
        <div className="auth-face auth-front">
          <Login />
          <p className="auth-switch">
            Don’t have an account?
            <span onClick={() => setFlip(true)}> Register</span>
          </p>
        </div>

        {/* BACK → REGISTER */}
        <div className="auth-face auth-back">
          <Register />
          <p className="auth-switch">
            Already have an account?
            <span onClick={() => setFlip(false)}> Login</span>
          </p>
        </div>

      </div>
    </div>
  );
}
