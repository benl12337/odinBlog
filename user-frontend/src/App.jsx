import './App.css';
import { useState, useEffect } from 'react';
import ArticleGrid from './components/ArticleGrid';
import Search from './components/Search';


function App() {

  // set article data
  const [posts, setPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts/published");
      const formattedPosts = await response.json();
      setPosts(formattedPosts);
      setFilteredPosts(formattedPosts);
    } catch (error) {
      console.log(error);
    }
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(e.target.value);

    // filter the posts
    const filtered = posts.filter((post)=> post.text.includes(term));
    setFilteredPosts(filtered);

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>./odinBlog</h1>
      <div className="body-content">
        <div className="container-left">
        <ArticleGrid posts={filteredPosts} />
        </div>
       <div className="container-right">
       <Search value={searchTerm} onChange={handleChange} />
       </div>
      </div>
    </>
  )
}

export default App
