import { Link } from "react-router"
import ProfilePic from "./ProfilePic"
import './Nav.css'

// Nav bar for loggin in
export default function Nav() {
    return (
        <div className="navbar">
            {/* Return a different set of links depending on whether or not user is authenticated */}
            < Link to="/login" >Login</Link>
            < Link to="/logout" >Logout</Link>
            <ProfilePic/>
        </div>
    )
}