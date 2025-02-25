import './PostCard.css'

export default function PostCard({ post }) {
    return (
        <div className="postcard">
            <div className="postcard-header">
                <div className='postcard-title'>{post.title}</div>
                {post.status === 'DRAFT' ? 
                <div className='header-tags'><div className='draft tag'>Draft</div><a href={'posts/'+post.id}><button>Edit</button></a></div>
                : 
                <div className='published tag'>Published</div>}
            </div>
            <div className='postcard-content'>{post.text}</div>
        </div>
    )
}