import { createRoot } from 'react-dom/client'
import "./style.css"
import App2 from "./Ccontext.jsx"
import { BrowserRouter } from 'react-router-dom'
import Mycontext from './Mycontext.jsx'

let mydata={
    name:"keshav",
    age:22,
    city:"bhopal"
}

createRoot(document.getElementById('root')).render(
    <Mycontext.Provider  value={mydata}>        
    <BrowserRouter>
    <App2/>
        </BrowserRouter>
        </Mycontext.Provider>
)
