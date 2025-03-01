import { useState } from "react";
const baseurl = import.meta.env.VITE_BASE_URL // API base url
import { useNavigate } from "react-router-dom";



export default function App() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: '',
        password: '',
        secret: ''
    });

    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        }
        )
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseurl}/users`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                setErrorMsg('Oops! Something went wrong...')
            } else {
                navigate("/login");
            };

            //redirect to home page
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={data.username} onChange={handleChange} required />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={data.password} onChange={handleChange} required />
            <label htmlFor="secret">Secret keyphrase:</label>
            <input type="text" name="secret" value={data.secret} onChange={handleChange} />
            <button>Register</button>
        </form>
        { errorMsg && <p>{errorMsg}</p>}
        </>
        
    )
}
