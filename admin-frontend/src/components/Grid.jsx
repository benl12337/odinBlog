import PostCard from "./PostCard"
import { useState, useEffect, useContext } from "react"
import LoadingCircle from "./LoadingCircle";
import { AuthContext } from "./AuthContext";
import './Grid.css'
const baseurl = import.meta.env.VITE_BASE_URL // API base url


export default function Grid() {

    // set filtered posts and current setting
    
    const [filter, setFilter] = useState("all");
    const [state, setState] = useState("loaded");
    const [posts, setPosts] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(null);
    const { token } = useContext(AuthContext)
;    // fetch the post data upon component mounting
    const fetchPosts = async () => {
        try {
            const response = await fetch(`${baseurl}/posts`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                console.log('Unable to connect to server');
            } else {
                console.log('fetched all posts....');
                const parsed = await response.json();
                setPosts(parsed);
            }
        } catch (err) {
            console.log(err);
        }

    };

    useEffect(() => {
        fetchPosts();
    }, [])

    const handleClick = (e) => {
        const selectedFilter = e.target.name;
        setFilter(selectedFilter);
        setState("loading")

        setTimeout(() => {
            if (selectedFilter === "all") {
                setFilteredPosts(posts);
            } else if (selectedFilter === 'draft') {
                setFilteredPosts(posts.filter(post => post.status === 'DRAFT'));
            } else {
                setFilteredPosts(posts.filter(post => post.status === 'PUBLISHED'));
            }
            setState("loaded")
        }, 550);

    }

    return (
        <div className="container">
            <div className="filters">
                <div className="buttons"><button name="all" className={filter == "all" ? "active" : ""} onClick={handleClick}>All</button>
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