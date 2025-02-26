import { useState } from "react";

export default function App() {

    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        }
        )
    };

    return (
        <form>
            <h1>Register</h1>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={data.username} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={data.password} onChange={handleChange} />
            <button>Register</button>
        </form>
    )
}