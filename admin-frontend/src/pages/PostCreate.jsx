import { useState } from "react";
import { Navigate } from "react-router";
const baseurl = import.meta.env.VITE_BASE_URL // create post route

export default function PostCreate( {fetchPosts} ) {

    const [data, setData] = useState({
        title: '',
        content: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // call a fetch to make the post
        
        try {
            fetch(`${baseurl}/posts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        } catch (err) {
            console.error(err);
        }

        fetchPosts();
    };

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={data.title} onChange={handleChange} />
                <label>Content:</label>
                <input type="text" name="content" value={data.content} onChange={handleChange} />
                <p>{JSON.stringify(data)}</p>
                <p>{baseurl}</p>
                <button>Create</button>
            </form>
        </>
    )
}