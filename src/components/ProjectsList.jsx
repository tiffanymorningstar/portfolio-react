
const ProjectsList = (props) => {
  return ( 
    <>
    <h1>Projects</h1>
    {props.projects.map(project =>
      <ul>
      <li key={project.title}>
        <p>{project.title}</p>
      </li>
      </ul>
   )}
   </>
  );
}
 
export default ProjectsList;