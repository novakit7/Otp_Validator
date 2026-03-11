import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div><Link to='/'>OTP-Validator</Link></div>
      <ul>
        <li><Link to ='/signup'>Signup</Link></li>
        <li><Link to ='/Profile'>Profile</Link></li>
      </ul>
      <hr/>
    </div>
  )
}
