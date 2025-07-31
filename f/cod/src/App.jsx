
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Home  from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Login from '../components/Login'
import Register from '../components/Register'
import Navabar from '../components/Navbar'
import Footer from '../components/Footer'
import Notfound from '../components/Notfound'
import Logout from '../components/Logout'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navabar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/login" element={<Login /> } />
      <Route path="/register" element={<Register /> } />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<Notfound />} />
    

    </Routes>
    <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
