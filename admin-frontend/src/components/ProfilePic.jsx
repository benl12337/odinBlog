import { useState, useContext } from "react"
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode"
import { Link } from "react-router";
import './ProfilePic.css'

export default function ProfilePic() {

    const { token } = useContext(AuthContext);

    // get username
    const [user, setUser] = useState(token || null);
    const [visible, setVisible] = useState(false);

    const letter = user ? jwtDecode(user).username.substring(1,0).toUpperCase() : null;
    
    const handleClick = () => {
       // show dropdown menu
        setVisible(!visible);
    }

    return(
        <div className="profile-pic" onClick={handleClick}>
            <p>{letter || '/'}</p>
            <div className={`dropdown ${visible ? 'visible' : ''}`}>
                <p>@{jwtDecode(user).username}</p>
                <Link to="/logout"><p>Logout</p></Link>
            </div>
        </div>

    )
}