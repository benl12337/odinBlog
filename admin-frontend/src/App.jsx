import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./components/AuthContext";
const baseurl = import.meta.env.VITE_BASE_URL // API base url

import {
  Routes,
  Route
} from "react-router";
import Home from './pages/Home'
import Login from './pages/Login'
import UserRegister from './pages/UserRegister'
import PostEdit from "./pages/PostEdit"
import PostDelete from "./pages/PostDelete"
import PostCreate from "./pages/PostCreate"
import Logout from "./pages/Logout"
import Nav from "./components/Nav";
import './App.css'

function App() {

  const { token } = useContext(AuthContext) // set JSONWebToken

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    try {
      console.log('base url is', baseurl)
      const response = await fetch(`${baseurl}/posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        console.log('Unable to connect to server');
      } else {
        console.log('set new posts!');
        const parsed = await response.json();
        setPosts(parsed);
      }
    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    console.log('the token has changed!!! we are refetching the posts');
    fetchPosts();
  }, [token])

  return (
    <>
      < Nav />
      <div className="page">
        <Routes>
          <Route index element={< Home posts={posts} />} />
          <Route path="login" element={< Login />} />
          <Route path="register" element={< UserRegister />} />
          <Route path="posts/:id" element={< PostEdit posts={posts} fetchPosts={fetchPosts} />} />
          <Route path="posts/delete/:id" element={< PostDelete posts={posts} fetchPosts={fetchPosts} />} />
          <Route path="/create" element={< PostCreate fetchPosts={fetchPosts} />} />
          <Route path="/logout" element={< Logout />} />
        </Routes>
      </div>
    </>
  )
}

export default App
