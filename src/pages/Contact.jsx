import { Link } from "react-router-dom"
import styles from "./Contact.module.css"


const Contact = () => {
  return ( 
    <div class="about flexbox-item-2">
    <main className={styles.contact}>
    <>
    <h1>Contact</h1>
    <h2>Reach out if you'd like to work with me!</h2>
    <Link to="">Email</Link>
    <Link to="">GitHub</Link>
    <Link to="">LinkedIn</Link>

    </>
    </main>
    </div>
   );
}
 
export default Contact;