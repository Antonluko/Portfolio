import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
function App() {

  return (
    <>
    <div className="container"> 
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
    </>
  )
}

export default App
