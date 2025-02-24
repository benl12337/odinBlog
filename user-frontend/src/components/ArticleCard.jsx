import './ArticleCard.css';
import { formatDistance } from 'date-fns'


function ArticleCard({ data }) {

    const formattedDate = formatDistance(data.posted, new Date(), { addSuffix: true });


    return (
        <div className="card-container">
            <div className="card-title">
                {data.title}
            </div>
            <div className="posted">
                {formattedDate}
            </div>
            <div className="card-content">
                {data.text}
            </div>
            <div className="comments">
                {data.commentCount}
            </div>
        </div>
    )
}

export default ArticleCard