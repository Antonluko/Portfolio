import ProjectCard from "./ProjectCard"
import portfolioImage from "../assets/portfolio.png"
import workoutImage from "../assets/workout.png"
import bookImage from "../assets/book.png"
function Projects() {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <p>Here are my frontend projects i am working on.</p>

      <div className="project-list">
        <ProjectCard 
        title="Portfolio Website"
        descritption="A personal protfolio built with React and Vite"
        tech="React, CSS, Vite"
        link="https://github.com/Antonluko/Portfolio"
        image={portfolioImage}
        />

        <ProjectCard
        title="Workout Tracker"
        description="A frontend app for tracking workouts and progress"
        tech="React, Javascript, HTML, SCSS, SQL, phpMyAdmin,"
        link="https://github.com/" // Will need to be updated 
         image={workoutImage}
        />

        <ProjectCard 
        title="Book Managment App"
        descriotion="A simple app to organise and manage books."
        tech="Kotlin, Android"
        link="https://github.com/" // Will need to be updated
         image={bookImage}
        />

      </div>
    </section>
  )
}

export default Projects