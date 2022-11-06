import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css"


const ProjectDetails = () => {
  return ( 
    <main className={styles.projectDetails}>
    <>
    <h1>{projects[0].title}</h1>
    <p>{projects[0].description}</p>
    <img src={projects[0].image}/>

 
    <a href ={projects[0].repositoryLink}
    ><button>GitHub Repo</button></a>

    <a href ={projects[0].deploymentLink}><button>Deployed Site</button></a>
    </>
    </main>
  );
}
 
export default ProjectDetails;