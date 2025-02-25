import {
  Routes,
  Route,
  Link
} from "react-router";
import { useState, useEffect } from "react";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Post from "./components/Post";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  )
}


function App() {

  const [posts, setPosts] = useState(null);

  // fetch the post data upon component mounting
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("http://localhost:3000/posts");
      console.log(data);
      const parsed = await data.json();
      setPosts(parsed);
    };
    fetchPosts();
  }, [])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={< Home posts={posts} />} />
        <Route path="login" element={< Login />} />
        <Route path="register" element={< Register />} />
        <Route path="posts/:id" element={< Post posts={posts} />} />
      </Routes>
    </div>
  )
}

export default App
