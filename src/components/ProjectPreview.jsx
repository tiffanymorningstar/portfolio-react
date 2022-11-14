import styles from "./ProjectPreview.module.css"
import hyphenateWords from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  console.log(path)
  return ( 
    <>
    
      <article className={styles.projectPreview}>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
      
        <h3>
            {props.title}
        </h3>
        <Link to={path}>
         
					<button>
              LEARN MORE
          </button>
       
          </Link>
          
    </section>
    </article>

</>
  );
}
 
export default ProjectPreview;