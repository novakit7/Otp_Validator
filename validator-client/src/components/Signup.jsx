import API from './Api'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

export default function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    otp: ""
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const sendUser = async () => {
    try {

      const res = await axios.post(`${API}/verify`, {
        name: user.name,
        email: user.email,
        password: user.password
      });

      console.log(res.data);

      setMsg(res.data.message);

    } catch (err) {
      console.log(err);
      setMsg("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendUser();
  };

  const otpVarify = async () => {
    try {

      const res = await axios.post(`${API}/signup`, {
        email: user.email,
        otp: user.otp
      });

      console.log(res.data);

      setMsg(res.data.message);

      // send user object to profile page
      navigate("/profile", { state: user });

    } catch (err) {
      console.log(err);
      setMsg("OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    otpVarify();
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1 className="title">Signup</h1>

        {msg && (
          <div className="message-box">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="signup-form">

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary">
            {loading ? "Sending..." : "Send OTP"}
          </button>

        </form>

        <div className="otp-box">

          <label>Enter OTP</label>

          <input
            type="text"
            name="otp"
            value={user.otp}
            onChange={handleChange}
          />

          <button onClick={handleSignup} className="btn-secondary">
            Verify OTP
          </button>

        </div>

      </div>

    </div>
  );
}