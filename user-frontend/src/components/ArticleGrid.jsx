import ArticleCard from '../components/ArticleCard';
import { useState, useEffect } from 'react';
import './ArticleGrid.css';

function ArticleGrid() {

    // set article data
    const [data, setData] = useState(null);

    // fetch all available posts
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/posts");
            const result = await response.json();
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <div className="article-grid">
            {data && data.map((item)=>(
                < ArticleCard key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ArticleGrid