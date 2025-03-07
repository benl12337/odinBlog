
import './ArticleGrid.css';
import ArticleCard from '../components/ArticleCard';

function ArticleGrid({ posts }) {

    return (
        <div className="article-grid">
            {posts && posts.map((item) => (
                < ArticleCard key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ArticleGrid;