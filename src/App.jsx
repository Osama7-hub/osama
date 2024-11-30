import { useState } from 'react'
import MyNavbar from './components/Navbar/MyNavbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Portifolio from './components/MyWork/Portifolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/scroll/ScrollToTop';
import Skills from './components/Skills/Skills';
import { LangContext } from './components/language/LangContext';

function App() {
  const [language, setLanguage] = useState('en');
  const direction = language === 'en' ? 'ltr' : 'rtl';
  return (
    <div dir={direction}>
      <LangContext.Provider value={{ language, setLanguage }}>
        <MyNavbar />
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Portifolio />
        <Contact />
        <Footer />
        <ScrollToTop />
      </LangContext.Provider>
    </div>
  )
}

export default App
