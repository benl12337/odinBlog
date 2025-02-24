import { useState, useEffect } from "react";

export default function Home() {

    // this gets ALL the posts- will be passed down to 
    const [posts, setPosts] = useState([]);

    // fetch all existing posts from the databse
    useEffect(()=>{
        const fetchPosts = async () => {
            console.log('fetchinggggg');
            const posts = await fetch("http://localhost:3000/posts");
            const data = await posts.json();
            setPosts(data);
            console.log(data);
            };
        fetchPosts();
    }, [])
    

    return (
        <div>
            {
                posts.map((post)=>{
                    return <h2 key={post.id} >{post.title}</h2>
                })
            }
        </div>
    )
}