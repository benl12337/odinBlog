import Grid from "../components/Grid";
import { useState } from "react";

export default function App({ posts }) {


 
    return (
        <div className="content-container">
            <Grid posts={posts} />
        </div>
    )
}