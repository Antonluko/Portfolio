import avatar from "../assets/avatar.avif";
function Home() {
    return (
        <section id="home" className="home"> 
        <div className="home-content"> 
            <h1>Welcome, I'm <span className="highlight">Anton </span> a <br/>  <span className="highlight">Software Developer </span></h1> <br/>
              <a href="#projects">
                <button>View Projects</button>
            </a>
         
            </div>
               <img src={avatar} alt="avatar" />
          
        </section>
    )
}

export default Home