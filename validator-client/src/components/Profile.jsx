import { useLocation } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {

  const location = useLocation();

  const user = location.state || {
    name: "Signin first",
    email: "email@example.com",
    role: "Developer"
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar">
            {user.name.charAt(0)}
          </div>

          <h2>{user.name}</h2>
          <p className="role">{user.role || "User"}</p>
        </div>

        <div className="profile-info">

          <div className="info-item">
            <span>Name</span>
            <p>{user.name}</p>
          </div>

          <div className="info-item">
            <span>Email</span>
            <p>{user.email}</p>
          </div>

        </div>

      </div>

    </div>
  );
}