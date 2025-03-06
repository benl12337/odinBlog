import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import TitleInput from "../components/TitleInput";
import { useNavigate } from "react-router";
import './PostEdit.css';
import { AuthContext } from "../components/AuthContext";
const baseurl = import.meta.env.VITE_BASE_URL

export default function Post({ posts }) {

    const { token } = useContext(AuthContext)
    const navigate = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState({});
    

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
            
            if (!response.ok) {
                console.log('Could not update resource');
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error(err);
        }

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
                <input type='text' value={post.text} onChange={handleChange} name='text' />
            </div>
            <button>Update</button>
        </form>
    )
}