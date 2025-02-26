import { useState } from "react";
import { useNavigate } from "react-router";
const baseurl = import.meta.env.VITE_BASE_URL // create post route

export default function PostCreate( {fetchPosts} ) {

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        content: '',
        status: 'DRAFT',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // call a fetch to make the post
        
        try {
            await fetch(`${baseurl}/posts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        } catch (err) {
            console.error(err);
        }
        await fetchPosts();
        navigate("/");
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
            status: data.status === 'DRAFT' ? 'PUBLISHED' : 'DRAFT',
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
                <label htmlFor="status">Publish post?</label>
                <input name='status' type='checkbox' value={data.status} onChange={toggleCheckbox}/>
                <button>Create</button>
            </form>
        </>
    )
}