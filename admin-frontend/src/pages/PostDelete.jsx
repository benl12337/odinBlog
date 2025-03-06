import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import './PostEdit.css';
import PostCard from "../components/PostCard";
import { AuthContext } from "../components/AuthContext";
import PostCreate from "./PostCreate";
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
        console.log('drakeo', post);
    }, [id, posts]);

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
        <div>
            <p>Are you sure you want to delete:</p>
            <PostCard post={post} />
        </div>
    )
}