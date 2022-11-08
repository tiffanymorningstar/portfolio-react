import { Link } from "react-router-dom"
import styles from "./Contact.module.css"


const Contact = () => {
  return ( 
    <div class="about flexbox-item-2">
    <main className={styles.contact}>
    <>
    {/* <img id="small-star "src='https://i.imgur.com/WLDTOXi.png'></img> */}

    <h1>Contact</h1>
    <h2>I can be reached via the links below:</h2>
    {/* <Link to="">Email</Link>
    <Link to="">GitHub</Link>
    <Link to="">LinkedIn</Link> */}
    <a href="https://www.linkedin.com/in/tiffanymorningstar/">
      <img src="https://i.imgur.com/TnXXqVx.png" alt="Email"></img></a>

      <a href="trmorningstar@gmail.com">
      <img src="https://i.imgur.com/6kUwjm6.png" alt="Email"></img></a>

      <a href="https://github.com/tiffanymorningstar">
      <img src="https://i.imgur.com/laQJCo9.png" alt="Email"></img></a>


    </>
    </main>
    </div>
   );
}
 
export default Contact;