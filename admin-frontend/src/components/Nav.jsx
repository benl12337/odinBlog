import { useContext } from "react"
import { Link } from "react-router"
import ProfilePic from "./ProfilePic"
import { AuthContext } from "./AuthContext"
import './Nav.css'

// Nav bar for loggin in
export default function Nav() {
    
    const { token } = useContext(AuthContext) // set JSONWebToken
    
    return (
        <div className="navbar">
            {/* Return a different set of links depending on whether or not user is authenticated */}
            <a href="/"><h1>./odinBlog</h1></a>
            {
                token ? <ProfilePic/> : 
               <div>
                 <Link to="/login" className="account-link">Login</Link>
                 <Link to="/register" className="account-link">Register</Link>
                </div>
            }   
        </div>
    )
}