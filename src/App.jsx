import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-secondary">
        <Header />
        <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </main>
      </div>
    </Router>
      </>
  )
}

export default App
