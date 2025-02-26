import './PostCard.css'
import { formatDistance } from 'date-fns'


export default function PostCard({ post }) {

    return (
        <div className="postcard">
            <div className="postcard-header">
                <div className='postcard-title'>
                    <div className="title">{post.title}</div>
                    <div className="date">{formatDistance(post.posted, new Date(), { addSuffix: true })}</div>
                </div>

                <div className='header-tags'>
                    {
                        post.status === 'DRAFT' ?
                            <div className='draft tag'>Draft</div> : <div className='published tag'>Published</div>
                    }
                    <a href={'posts/' + post.id}>
                        <button>Edit</button></a>
                </div>
            </div>
            <div className='postcard-content'>{post.text}</div>
        </div>
    )
}