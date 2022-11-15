import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    
      <nav>
        <article className={styles.navBar}>
       
        <img id="star" src="./images/star.png" alt="Star"/>

          <Link class="name"
              to='/'
          >
              Tiffany Morningstar
          </Link>

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