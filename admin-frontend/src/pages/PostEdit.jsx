import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import './PostEdit.css';
import { AuthContext } from "../components/AuthContext";
const baseurl = import.meta.env.VITE_BASE_URL

export default function Post({ fetchPosts, posts }) {

    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState({
        title: '',
        text: ''
    });


    useEffect(() => {
        if (posts) {
            const foundPost = posts.find(post => post.id === Number(id));
            setPost(foundPost || {});
        }
    }, [id, posts]);

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = async (e) => {
        
        e.preventDefault();
        console.log('making a call');
        // make an api call to update the post
        try {
            const response = await fetch(`${baseurl}/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(post)
            });

            console.log(response);

            if (!response.ok) {
                console.log('Could not update resource');
            } else {
                fetchPosts();
                navigate("/");
            }
        } catch (err) {
            console.error(err);
        }

    }


    return (
        post &&
        <form className="post" onSubmit={handleEdit}>
                <input type='text' value={post.title} onChange={handleChange} name='title' />
                <input type='text' value={post.text} onChange={handleChange} name='text' />
            <button>Update</button>
        </form>
    )
}