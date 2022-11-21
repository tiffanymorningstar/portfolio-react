import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    
      <nav>
        <article className={styles.navBar}>
       
        
        <div>
          {/* <Link class="name"
              to='/'
          >
              Tiffany Morningstar
          </Link> */}
        </div>
          
        
    
          <ul>
          
          <li>
          { <Link class="name"
              to='/'
          >
              Tiffany Morningstar
          </Link> }
        </li>

        { <img id="star" src="./images/star.png" alt="Star"/> }



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