import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    
      <nav>
        <article className={styles.navBar}>
          <Link 
              to='/'
          >
              Tiffany Morningstar
          </Link>
          <img id="star" src="./images/star.png" alt="Star"/>


          <ul>
              <li>
                  <Link
                      to='/about'
                  >
                      About
                  </Link>
              </li>

              <li>
                  <Link
                      to='/contact'
                  >
                      Contact
                  </Link>
              </li>
              <li>
                  <Link
                      to='/home'
                  >
                      Home
                  </Link>
              </li>
              <li>
                  <Link
                      to='/projects'
                  >
                      Projects
                  </Link>
              </li>
              <li>
                  <Link
                      to='/resume'
                  >
                      Resume
                  </Link>
              </li>
          </ul>
        </article>      
       </nav>
      
  )
}

export default NavBar