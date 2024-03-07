import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import './App.css'
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
</div>
  )
}

export default App