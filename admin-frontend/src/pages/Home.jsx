import Grid from "../components/Grid";
import { useState } from "react";

export default function App({ posts }) {

    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        console.log(searchTerm);

        if (value.trim() === "") {
            setFilteredPosts(posts)
        } else {
            setFilteredPosts([...posts].filter((post) => post.text.toLowerCase().includes(searchTerm.toLowerCase())))
        }
    }

    return (
        <div className="content-container">
            <input type="text" onChange={handleChange} value={searchTerm} placeholder="Search posts" />
            <Grid posts={filteredPosts} />
        </div>
    )
}