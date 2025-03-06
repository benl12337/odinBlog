import { useState, useEffect } from 'react';
import './ArticleGrid.css';
import ArticleCard from '../components/ArticleCard';
import { format } from 'date-fns';

function ArticleGrid() {

    // set article data
    const [data, setData] = useState(null);

    // fetch all available posts
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/posts/published");
            const formattedPosts = await response.json();
            setData(formattedPosts);
            console.log(formattedPosts);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="article-grid">
            {data && data.map((item) => (
                < ArticleCard key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ArticleGrid;