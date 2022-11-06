import { projects } from "../data/projects"
import ProjectsList from "../components/ProjectsList"
import styles from "./Projects.module.css"


const Projects = (props)=> {
  return (
    <main className={styles.projects}>
    <>
      <ProjectsList projects={projects}/>
    </>
    </main>
  )
}

export default Projects