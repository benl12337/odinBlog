import PostCard from "./PostCard"
import { useState, useEffect, useContext } from "react"
import LoadingCircle from "./LoadingCircle";
import { AuthContext } from "./AuthContext";
import './Grid.css'


export default function Grid( {posts} ) {

    // set filtered posts and current setting
    const [filter, setFilter] = useState("all"); // choose post view
    const [state, setState] = useState("loaded"); // set animation state
    const [filteredPosts, setFilteredPosts] = useState(posts);

    // handle filtering of posts
    const handleClick = (e) => {

        const selectedFilter = e.target.name;
        let filtered = [];
        setFilter(selectedFilter);
        setState("loading");

        setTimeout(() => {
            if (selectedFilter === "all") {
                setFilteredPosts(posts);
            } else if (selectedFilter === 'draft') {
                if (posts) { 
                    filtered = posts.filter(post => post.status === 'DRAFT');
                    setFilteredPosts(filtered);
                } else {
                    setFilteredPosts(null);
                }
            } else {
                if (posts) { 
                    filtered = posts.filter(post => post.status === 'PUBLISHED');
                    setFilteredPosts(filtered);
                } else {
                    setFilteredPosts(null);
                }
            }
            setState("loaded");
        }, 550);

    }

    useEffect(()=>{
        setFilteredPosts(posts);
    }, [posts]);

    return (
        <div className="container">
            <div className="filters">
                <div className="buttons"><button name="all" className={filter == "all" ? "active" : ""} onClick={handleClick}>All</button>
                    <button name="published" className={filter == "published" ? "active" : ""} onClick={handleClick}>Published</button>
                    <button name="draft" className={filter == "draft" ? "active" : ""} onClick={handleClick}>Drafts</button></div>
                <a href="/create"><button className="create">Create Post</button></a>
            </div>
            <div className="scrollable-div">

                {
                    state == "loading" ? < LoadingCircle message={"Loading posts..."} /> :
                        (
                            filteredPosts && filteredPosts.length > 0 ? filteredPosts && filteredPosts.map((post) => {
                                return < PostCard post={post} key={post.id} />
                            }) : <div className="message">Error fetching posts...Please try again later</div>
                        )
                }
            </div>
        </div>
    )
}