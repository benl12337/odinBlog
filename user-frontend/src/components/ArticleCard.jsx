import './ArticleCard.css'

function ArticleCard({ data }) {
    return (
        <div className="card-container">
            <div className="card-title">
                {data.title}
            </div>
            <div className="posted">
                {data.posted}
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