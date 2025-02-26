import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './PostEdit.css';

export default function Post({ posts }) {

    const { id } = useParams();
    const [post, setPost] = useState(null);

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


    return (
        post &&
        <form className="post">
            <div className="form-title">
                <label htmlFor="title">Title</label>
                <input type='text' value={post.title} onChange={handleChange} name='title' />
            </div>
            <div className="form-body">
                <input type='text' value={post.text} onChange={handleChange} name='content' />
            </div>
        </form>
    )
}