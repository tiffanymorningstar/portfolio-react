import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  return ( 
    <>
    <h1>Projects</h1>
    <ul>
    {props.projects.map(project =>
      <li key={project.title}>
        <ProjectPreview title ={project.title} />
      </li>
   )}
   </ul>
   </>
  );
}
 
export default ProjectsList;

