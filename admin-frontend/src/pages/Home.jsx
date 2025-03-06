import Grid from "../components/Grid";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function App({ posts }) {

    // if no token exists, don't show posts
    const { token } = useContext(AuthContext);

    return (
        <div className="content-container">
            {token ? <Grid posts={posts} /> : <p>Please login to see posts</p>}
        </div>
    )
}