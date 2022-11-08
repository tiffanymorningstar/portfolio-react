import styles from "./About.module.css"


const About = () => {
  return ( 
    <div class="about flexbox-item-1">
    <main className={styles.about}>
    <>
    <h1>About</h1>

    <img id="headshot "src='https://i.imgur.com/CNhSNEx.jpg'></img>

    <p>I’m a Software Engineer that likes to find the right solution to a problem. Starting out in tech as a QA Engineer, I can find unexpected use cases in the early stages of development, helping to avoid additional work later on in the software development life cycle.</p>

   

    </>
    </main>
    </div>
   );
}
 
export default About;