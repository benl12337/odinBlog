import Grid from "../components/Grid";

export default function App({ posts }) {
 
    return (
        <div className="content-container">
            <Grid posts={posts} />
        </div>
    )
}