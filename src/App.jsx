
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import CustomCursor from './components/CustomCursor'
import MobileBottomNav from './components/MobileBottomNav'
import { useEffect } from 'react'

const App = () => {
   useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <div className='relative'>
      <div className='max-sm:hidden'><CustomCursor /></div>
      
      <Navbar />
      <MobileBottomNav />
      <div className="bg-[#f9f6ed] min-h-screen w-full text-gray-900 antialiased font-sans selection:bg-orange-200 selection:text-orange-900">
        <Routes>
          <Route path='/muneeb-portfolio' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App