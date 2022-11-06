import ProjectPreview from "./ProjectPreview";
import styles from "./ProjectsList.module.css"


const ProjectsList = (props) => {
  return ( 
    <>
    <article className={styles.projectPreview}>
    <h1>Projects</h1>
    <ul>
    {props.projects.map(project =>
      <li key={project.title}>
        <ProjectPreview title ={project.title} image = {props.image} />
      </li>
   )}
   </ul>
   </article>
   </>
  );
}
 
export default ProjectsList;

