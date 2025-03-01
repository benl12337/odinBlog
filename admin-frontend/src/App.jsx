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

function App() {

  

  return (
    <div className="page">
      <Routes>
        <Route index element={< Home />} />
        <Route path="login" element={< Login />} />
        <Route path="register" element={< UserRegister />} />
        <Route path="posts/:id" element={< PostEdit />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
    </div>
  )
}

export default App
