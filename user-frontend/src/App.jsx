import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import ArticleGrid from '../src/components/ArticleGrid';
import './App.css';

function App() {

  return (
    <>
    <h1>My Blog</h1>
    <nav>
    <a>Home</a>
    <a></a>
    </nav>
    < ArticleGrid />
    </>
  )
}

export default App
