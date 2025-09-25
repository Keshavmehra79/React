import { createRoot } from 'react-dom/client'
import "./style.css"
import App2 from "./Form.jsx"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App2/>
        </BrowserRouter>
)
