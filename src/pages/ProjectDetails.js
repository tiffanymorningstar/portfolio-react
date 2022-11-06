import { projects } from "../data/projects";

const ProjectDetails = () => {
  return ( 
    <>
    <h1>{projects[0].title}</h1>
    <p>{projects[0].description}</p>
    <img src="public/mk-screen-shot.png" alt="Mortal Connect Four Combat" />

 
    <a href ={projects[0].repositoryLink}
    ><button>GitHub Repo</button></a>

    <a href ={projects[0].deploymentLink}><button>Deployed Site</button></a>

    <h1>{projects[1].title}</h1>
    <p>{projects[1].description}</p>
    <img src="public/migraine_tracker.png" alt="Migraine Tracker" />

    <a href ={projects[1].repositoryLink}>
    <button>GitHub Repo</button></a>

    <a href ={projects[1].deploymentLink}><button>Deployed Site</button></a>
    </>
  );
}
 
export default ProjectDetails;