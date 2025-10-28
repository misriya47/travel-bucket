import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.Jsx'
import HomePage from './components/HomePage'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
import Header from './pages/Header'
import Footer from './pages/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/create' element={<Create />} ></Route>
          <Route path='/update/:id' element={<Update />} ></Route>
          <Route path='/read/:id' element={<Read />} ></Route>
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}

export default App
