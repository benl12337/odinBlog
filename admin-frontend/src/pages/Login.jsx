
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
const baseurl = import.meta.env.VITE_BASE_URL // API base url


export default function App() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const { login } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseurl}/users/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                // show error message
                setErrorMsg('Something went wrong. Please try again');
            }

            const json = await response.json(); //returns access token
            
            // save the token to storage 
            console.log('logging in and this is the token: ', json.token);
            login(json.token);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input name="username" type="text" value={data.username} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" value={data.password} onChange={handleChange} />
                <button>Login</button>
            </form>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    )
}