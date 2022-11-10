import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css"
import findProject from "../utilities/findProject";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams()
  // const name = params.projectName
  const location = useLocation()
  let locProj = location.pathname
  locProj = locProj.replace('/projects/', '')
  const project = findProject(locProj)

console.log(project)

  return ( 
    <main className={styles.projectDetails}>
    <>
    <h1>{project.title}</h1>
    <div>
    <p>{project.description}</p>
    </div>

    <div>
    <img src={project.image} alt="screenshot"/>
    </div>

    <div>
    <a href ={project.repositoryLink}
    ><button>GitHub Repo</button></a>
    </div>

    <div>
    <a href ={project.deploymentLink}><button>Deployed Site</button></a>
    </div>
    </>
    </main>
  );
}
 
export default ProjectDetails;