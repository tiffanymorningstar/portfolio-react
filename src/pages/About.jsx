import styles from "./About.module.css"


const About = () => {
  return ( 
    <main className={styles.about}>
    <>
    <div className="flexbox-container1">
    {/* <h1>About</h1> */}
    <div>
    <div className="flexbox-item-1">
    <img id="headshot "src='https://i.imgur.com/CNN0Wkt.jpg' alt='headshot'></img>
    </div>
    <div className="flexbox-item-2">
    <p>When I'm not working I enjoy a variety of activities. I like to travel across the country and backpack different parks.  I also like reading, doing word puzzles, playing Pokemon Go,  and spending time with friends.</p>
    </div>
    </div>
    </div>
    </>
    </main>
    
   );
}
 
export default About;