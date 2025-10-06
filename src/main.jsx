import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import ScrollToTop from "../src/components/ScrolToTop.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>,
)

