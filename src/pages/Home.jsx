import styles from "./Home.module.css"


const Home = () => {
  return ( 
    <main className={styles.home}>
    <>
    <h1>Home</h1>
    <h2>Tiffany Morningstar</h2>
    <img id="headshot"src='https://i.imgur.com/CNhSNEx.jpg' alt='headshot'></img>
    <h3>Software Engineer</h3>
    <p>I’m a Software Engineer that likes to find the right solution to a problem. Starting out in tech as a QA Engineer, I can find unexpected use cases in the early stages of development, helping to avoid additional work later on in the software development life cycle.</p>
    </>
    </main>
   );
}
 
export default Home;