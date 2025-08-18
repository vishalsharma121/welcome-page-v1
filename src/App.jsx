import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProjectSection from './components/ProjectSection'
import ProjectCard from './components/ProjectCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-secondary">
      <Header />
      <main>
        <ProjectSection />
      </main>
    </div>
      </>
  )
}

export default App
