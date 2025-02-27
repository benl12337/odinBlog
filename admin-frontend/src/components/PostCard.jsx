import './PostCard.css'
import { formatDistance } from 'date-fns'
import editImg from '../assets/edit.svg'
import deleteImg from '../assets/delete.svg'


export default function PostCard({ post }) {

    return (
        <div className="postcard">
            <div className="postcard-header">
                <div className='postcard-title'>
                    <div className="title"><h4>{post.title}</h4></div>
                    <div className="date"><p>{formatDistance(post.posted, new Date(), { addSuffix: true })}</p></div>
                </div>

                <div className='header-tags'>
                    {
                        post.status === 'DRAFT' ?
                            <div className='draft tag'>Draft</div> : <div className='published tag'>Published</div>
                    }
                    <a href={'posts/' + post.id}>
                        <img src={editImg} />
                    </a>
                    <a href={'posts/delete' + post.id}>
                        <img src={deleteImg} />
                    </a>
                </div>
            </div>
            <div className='postcard-content'>{post.text}</div>
        </div>
    )
}