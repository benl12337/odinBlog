import {
  Routes,
  Route,
  Link
} from "react-router";
import { useState, useEffect } from "react";
import Home from './pages/Home'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import PostEdit from "./pages/PostEdit"
import PostCreate from "./pages/PostCreate"
import './App.css'
const baseurl = import.meta.env.VITE_BASE_URL // API base url

function App() {

  const [posts, setPosts] = useState(null);

  // fetch the post data upon component mounting
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${baseurl}/posts`, {
        
      });

      if (!response.ok) {
        console.log('Unable to connect to server');
      } else {
        console.log('fetched all posts....');
        const parsed = await response.json();
        setPosts(parsed);
      }
    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className="page">
      <Routes>
        <Route index element={< Home posts={posts} />} />
        <Route path="login" element={< Login />} />
        <Route path="register" element={< UserRegister />} />
        <Route path="posts/:id" element={< PostEdit posts={posts} />} />
        <Route path="/create" element={<PostCreate fetchPosts={fetchPosts} />} />
      </Routes>
    </div>
  )
}

export default App
