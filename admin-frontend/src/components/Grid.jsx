import PostCard from "./PostCard"
import './Grid.css'

export default function Grid({posts}) {

    // show filtered posts


    return (
        <div className="Grid scrollable-div">
            {
                posts && posts.map((post)=>{
                    return < PostCard post={post} key={post.id} />
                })
            }
        </div>
    )
}