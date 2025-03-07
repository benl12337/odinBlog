import './App.css';
import { useState, useEffect } from 'react';
import ArticleGrid from './components/ArticleGrid';
import Search from './components/Search';
import Sorter from './components/Sorter';


function App() {

  // set article data
  const [posts, setPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [asc, setAsc] = useState(false);
  const [state, setState] = useState('Loaded');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts/published");
      const formattedPosts = await response.json();
      const sortedPosts = formattedPosts.sort((a, b) =>
        new Date(b.posted) - new Date(a.posted)
      );
      setPosts(sortedPosts);
      setFilteredPosts(sortedPosts);

    } catch (error) {
      console.log(error);
    }
  }

  const toggleSort = () => {
    // when the sort gets clicked
    const order = !asc;
    if (asc) {
      const sortedPosts = posts.sort((a, b) =>
        new Date(b.posted) - new Date(a.posted)
      );
      setFilteredPosts(sortedPosts);
    } else {
      const sortedPosts = posts.sort((a, b) =>
        new Date(a.posted) - new Date(b.posted)
      );
      setFilteredPosts(sortedPosts);
    }
    setAsc(order);

    setState('Loading');
    
    setTimeout(()=>{
      setState('Loaded');
    }, 450)
  }


  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(e.target.value);

    // filter the posts
    const filtered = posts.filter((post) => post.text.includes(term));
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
          <Sorter onToggle={toggleSort} />
          {
            state === 'Loading' ? <p>Loading...</p> : <ArticleGrid posts={filteredPosts} />
          }
        </div>
        <div className="container-right">
          <Search value={searchTerm} onChange={handleChange} />
        </div>
      </div>
    </>
  )
}

export default App
