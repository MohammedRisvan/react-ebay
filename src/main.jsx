import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/700.css"; // Optional: specific weight
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
  </StrictMode>
)
