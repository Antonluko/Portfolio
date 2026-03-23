import ProjectCard from "./ProjectCard"
function Projects() {
  return (
    <section id="projects" classNamer="projects">
      <h1>Projects</h1>
      <p>Here are my frontend projects i am working on.</p>

      <div className="project-title">
        <ProjectCard 
        title="Portfolio Website"
        descritption="A personal protfolio built with React and Vite"
        link="https://github.com/Antonluko/Portfolio"
        />

        <ProjectCard
        title="Workout Tracker"
        description="A frontend app for tracking workouts and progress"
        link="https://github.com/" // Will need to be updated 
        />

        <ProjectCard 
        title="Book Managment App"
        descriotion="A simple app to organise and manage books."
        link="https://github.com/" // Will need to be updated
        />

      </div>
    </section>
  )
}

export default Projects