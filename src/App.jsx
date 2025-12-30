import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NotFound from './pages/NotFound'
import Contact from './sections/Contact'
import ChatWindow from './components/chatbot/ChatWindow'
import ChatBubble from './components/chatbot/ChatBubble'
import FullProject from './components/project/FullProject'
import Thankyou from './pages/Thankyou'
import FullCertificate from './components/certificate/FullCertificate'
import Certificates from './pages/Certificates'
import ChatWidget from './components/chatbot/ChatWidget'

const App = () => {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <BrowserRouter>
      <div className=' min-h-screen'>
        <Navbar />

        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/projects/:id' element={<FullProject />} />
            <Route path='/certificates' element={<Certificates/>}/>
            <Route path='/certificates/:id' element={<FullCertificate />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/chatbot' element={<ChatWindow />} />
            <Route path='/thankyou' element={<Thankyou/>}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        {/* <ChatBubble />
         */}
         <ChatWidget />

      </div>
    </BrowserRouter>
  )
}

export default App