import { Link } from "react-router-dom"
import styles from "./Resume.module.css"


const Resume = () => {
  return ( 
    <main className={styles.resume}>
    <>
    <h1>Resume</h1>
    <Link to="./files/TiffanyMorningstarResume2022.pdf">
    </Link>
    {/* <p>To learn about my work and experience, feel free to download my resume at the link below</p> */}
    <a href="./files/TiffanyMorningstarResume2022.pdf" download="tiffany-morningstar-resume">Click here to Download</a>


    <a href="./files/TiffanyMorningstarResume2022.pdf" download="tiffany-morningstar-resume">
    <img src="https://i.imgur.com/BT3MrST.png" alt="Resume"></img></a>


    </>
    </main>
   );
}
 
export default Resume;