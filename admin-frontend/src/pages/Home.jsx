import Grid from "../components/Grid";

export default function App( {posts} ) {
    return (
        <>
            <h1>Posts</h1>
            <Grid posts={posts} />
        </>
    )
}