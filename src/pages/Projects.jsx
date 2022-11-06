import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"

const Projects = (props)=> {
  return (
    <>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default Projects