import Grid from "../components/Grid";
import { useState } from "react";

export default function App({ posts }) {

    
 
    return (
        <div className="content-container">
            <div className="navbar">
                <input className="searchbar" type="text" placeholder="Search posts" />
            </div>
            <Grid posts={posts} />
        </div>
    )
}