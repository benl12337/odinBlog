import { useState } from 'react'
import Home from './pages/Home';
const BASEURL = 'http://localhost:3000';

function App() {
  const [body, setBody] = useState({
    title: '',
    content: ''
  });

  const postLogin = async (e) => {
    e.preventDefault();

    console.log('body frontend', JSON.stringify(body));
    const response = await fetch(`${BASEURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    const formatted = await response.json();
    return formatted;
  };

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Home />
    </>
  )
}

export default App
