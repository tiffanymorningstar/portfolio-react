import { Link } from "react-router-dom"
import styles from "./Resume.module.css"


const Resume = () => {
  return ( 
    <main className={styles.resume}>
    <>
    <h1>Resume</h1>
    <Link to="./files/TiffanyMorningstarResume2022.pdf">
    </Link>
 
    <a href="./files/TiffanyMorningstarResume2022.pdf" download="tiffany-morningstar-resume">Click here to Download Resume</a>

    </>
    </main>
   );
}
 
export default Resume;