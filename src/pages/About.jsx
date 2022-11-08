import styles from "./About.module.css"


const About = () => {
  return ( 
    <div class="about flexbox-item-1">
    <main className={styles.about}>
    <>
    <h1>About</h1>

    <img id="headshot "src='https://i.imgur.com/CNN0Wkt.jpg'></img>

    <p>When I'm not working I enjoy hiking, reading, playing Pokemon Go and spending time with friends.</p>

   

    </>
    </main>
    </div>
   );
}
 
export default About;