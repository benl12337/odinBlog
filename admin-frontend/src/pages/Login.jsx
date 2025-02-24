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
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input name="username" type="text" value={data.username} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input name="password" type="text" value={data.password} onChange={handleChange} />
            <button>Login</button>
        </form>
    )
}