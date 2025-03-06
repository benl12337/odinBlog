import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../components/AuthContext";
import './PostCreate.css';
import Switch from "../components/Switch";
const baseurl = import.meta.env.VITE_BASE_URL // create post route

export default function PostCreate({ fetchPosts }) {

    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        content: '',
        status: true,
    });

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        // POST the new article to the api
        try {

            const formattedData = {
                ...data,
                status: data.status ? 'PUBLISHED' : 'DRAFT',
            }

            const response = await fetch(`${baseurl}/posts`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                 },
                body: JSON.stringify(formattedData)
            });
            
            if (!response.ok) {
                console.log('Could not create resource');
            } else {
                fetchPosts();
                navigate("/");
            }



        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    const toggleCheckbox = () => {
        setData({
            ...data,
            status: !data.status,
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="create-post">
                <label>Title:</label>
                <input type="text" name="title" value={data.title} onChange={handleChange} />
                <label>Content:</label>
                <input type="text" name="content" value={data.content} onChange={handleChange} />
                <label htmlFor="status">Publish post?</label>
                <Switch isOn={data.status} handleToggle={toggleCheckbox} />
                <button>Create</button>
            </form>
        </>
    )
}