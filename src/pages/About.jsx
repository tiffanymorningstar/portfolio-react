import styles from "./About.module.css"


const About = () => {
  return ( 
    <main className={styles.about}>
    <>
    {/* <h1>About</h1> */}
    <div>
    <img id="headshot "src='https://i.imgur.com/CNN0Wkt.jpg' alt='headshot'></img>
    <p>When I'm not working I enjoy hiking, reading, playing Pokemon Go, and spending time with friends.</p>
    </div>
   

    </>
    </main>
    
   );
}
 
export default About;