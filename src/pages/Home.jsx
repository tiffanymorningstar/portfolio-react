import styles from "./Home.module.css"


const Home = () => {
  return (
    <main className={styles.home}>
      <>
        <div className="flexbox-container1">
          {/* <h2>TIFFANY MORNINGSTAR</h2> */}
          <div>
          <div className="flexbox-item-1">
            <img className={styles.headshot} src='https://i.imgur.com/CNhSNEx.jpg' alt='headshot'></img>
          </div>
          {/* <h3>Software Engineer</h3> */}
          <div className="flexbox-item-2">
            <p>I’m a Software Engineer with a Tech Stack that includes: HTML5, CSS3, JavaScript, MongoDB, React, Node.JS, Express, Python, Django, Java, and Selenium.<br></br><br></br>
            Starting out in tech as a QA Engineer, I can find unexpected use cases in the early stages of development, helping to avoid additional work later on in the software development life cycle
            </p>
          </div>
        </div>
        </div>
      </>
    </main>
  );
}

export default Home;