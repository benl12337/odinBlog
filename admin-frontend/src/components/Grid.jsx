import PostCard from "./PostCard"

export default function Grid({posts}) {

    // show filtered posts


    return (
        <div className="Grid">
            {
                posts && posts.map((post)=>{
                    return < PostCard post={post} key={post.id} />
                })
            }
        </div>
    )
}