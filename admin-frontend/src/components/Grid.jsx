import PostCard from "./PostCard"

export default function Grid({posts}) {
    return (
        <div>
            {
                posts && posts.map((post)=>{
                    return < PostCard post={post} key={post.id} />
                })
            }
        </div>
    )
}