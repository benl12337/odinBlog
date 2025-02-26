import { useParams } from "react-router";
import { useState, useEffect } from "react";
import TitleInput from "../components/TitleInput";
import './PostEdit.css';

export default function Post({ posts }) {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [editingTitle, setEditingTitle] = useState(false);

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

    const handleEdit = (e) => {
        e.preventDefault();
    }


    return (
        post &&
        <form className="post">
            <div className="tab"></div>
            <div className="form-title">
                < TitleInput onChange={handleChange} value={post.title} />
                <button onClick={handleEdit} >edit</button>
            </div>
            <div className="form-body">
                <input type='text' value={post.text} onChange={handleChange} name='content' />
            </div>
            <button>Update</button>
        </form>
    )
}