import './ArticleCard.css'
import { format, differenceInDays } from "date-fns"

function ArticleCard({ data }) {

    // if posted recently, add a 'new' tag
    const isNew = data.posted && differenceInDays(new Date(), data.posted) <= 3;

    return (
        <div className="article-card">
            <div className="top-half">
                <div className="card-header">
                    <span className='card-title'>{data.title}</span>
                    {isNew && <div className="tag">NEW</div>}
                </div>
                <div className="card-date">
                    {data.lastEdited ? 'edited ' + format(data.lastEdited, "eo MMM yyyy") : 'posted ' + format(data.posted, "eo MMM yyyy")}
                </div>
                <div className="card-content">
                    {data.text}
                </div>
            </div>
            <div className="bottom-half">
                {data.commentCount} Comments
            </div>
        </div>
    )
}

export default ArticleCard