import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './components/AuthContext';
import './index.css'
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
