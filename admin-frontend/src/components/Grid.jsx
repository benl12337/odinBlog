import PostCard from "./PostCard"
import { useState } from "react"
import LoadingCircle from "./LoadingCircle";
import './Grid.css'

export default function Grid({ posts }) {

    // set filtered posts and current setting
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [filter ,setFilter] = useState("all");
    const [state, setState] = useState("loaded");

    const handleClick = (e) => {
        const selectedFilter = e.target.name;
        setFilter(selectedFilter);
        setState("loading")

        setTimeout(()=>{
            if (selectedFilter === "all") {
                setFilteredPosts(posts);
            } else if (selectedFilter === 'draft') {
                setFilteredPosts(posts.filter(post=>post.status==='DRAFT'));
            } else {
                setFilteredPosts(posts.filter(post=>post.status==='PUBLISHED')); 
            }
            setState("loaded")
        }, 550);
        
    }

    return (
        <div className="container">
            <div className="filters">
                <div className="buttons"><button name="all" className={filter == "all" ? "active" : ""}  onClick={handleClick}>All</button>
                <button name="published" className={filter == "published" ? "active" : ""} onClick={handleClick}>Published</button>
                <button name="draft" className={filter == "draft" ? "active" : ""} onClick={handleClick}>Drafts</button></div>
                <a href="/create"><button className="create">Create Post</button></a>
            </div>
            <div className="scrollable-div">

                {state == "loading" ? < LoadingCircle message={"Loading posts..."} /> : filteredPosts && filteredPosts.map((post) => {
                    return < PostCard post={post} key={post.id} />
                })}
            </div>
        </div>
    )
}