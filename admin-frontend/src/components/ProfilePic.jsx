import { useState } from "react"
import { jwtDecode } from "jwt-decode"
import './ProfilePic.css'

export default function ProfilePic() {

    // get username
    const [user, setUser] = useState(localStorage.getItem("token")|| null);
    const [visible, setVisible] = useState(false);


    const letter = user ? jwtDecode(user).username.substring(1,0).toUpperCase() : null;
    
    const handleClick = () => {
       // show dropdown menu
        setVisible(!visible);
    }

    return(
        <div className="profile-pic" onClick={handleClick}>
            <p>{letter || '/'}</p>
            <div className={`dropdown ${visible ? 'visible' : 'hidden'}`}>
                <p>Logout</p>
            </div>
        </div>

    )
}