import styles from "./ProjectPreview.module.css"


const ProjectPreview = (props) => {
  return ( 
    <div>
      <article className={styles.projectPreview}>
    <img 
        src={props.image} 
        alt={props.title}
    />

    <section>
        <h3>
            {props.title}
        </h3>
					<button>
              Learn more
          </button>
    </section>
    </article>
</div>
  );
}
 
export default ProjectPreview;