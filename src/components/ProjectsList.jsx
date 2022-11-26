import ProjectPreview from "./ProjectPreview";
import styles from "./ProjectsList.module.css"


const ProjectsList = (props) => {
  return ( 
    <>
    <article className={styles.projectPreview}>
    {/* <h1>Projects</h1> */}
    <ul>
    {props.projects.map(project =>
      <li >
        <ProjectPreview title ={project.title} image = {project.image} key={project.title} />
      </li>
   )}
   </ul>
   </article>
   </>
  );
}
 
export default ProjectsList;

