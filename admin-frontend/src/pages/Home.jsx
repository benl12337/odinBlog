import Grid from "../components/Grid";
import { useState } from "react";

export default function App({ posts }) {

    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
        searchTerm === '' ? setFilteredPosts(posts) : setFilteredPosts([...posts].filter((post) => post.text.includes(searchTerm)));
    }

    return (
        <>
            <h1>Posts</h1><input type="text" onChange={handleChange} value={searchTerm} />
            <Grid posts={filteredPosts} />
        </>
    )
}