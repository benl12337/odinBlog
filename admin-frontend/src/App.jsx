import {
  Routes,
  Route,
  Link
} from "react-router";
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

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

  return (
   <div>
    <Navbar/>
     <Routes>
      <Route index element={ < Home /> }/>
      <Route path="login" element={ < Login /> } />
      <Route path="register" element={ < Register /> } />
    </Routes>
   </div>
  )
}

export default App
