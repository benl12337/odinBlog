import { useState, useEffect } from "react"

export default function App() {

        const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = () => {
            
        };
        fetchPosts();
    },[])

    return (
        <h1>Posts</h1>
    )
}