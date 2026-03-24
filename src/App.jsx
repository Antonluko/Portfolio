import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
import Skills from "./components/Skills"
function App() {

  return (
    <>
    <div className="container"> 
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
    </>
  )
}

export default App
