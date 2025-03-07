
import './ArticleGrid.css';
import ArticleCard from '../components/ArticleCard';

function ArticleGrid({ posts }) {

    return (
        <div className="article-grid">
            {
                posts.length == 0 && <p>No posts</p>
            }
            {posts && posts.map((item) => (
                < ArticleCard key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ArticleGrid;