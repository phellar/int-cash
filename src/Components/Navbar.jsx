import React from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'




const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

      const handleToggle= () => {
        setIsOpen(!isOpen)
      }



  return (
    <header className='header'>
        <div className='container'>
          <nav  className='navbar'>
              <div className='logo'></div>


              <div className="mobile-menu" onClick={handleToggle}>

                {isOpen ? <FaTimes/> : <FaBars/>}
                

              {isOpen && <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Contact</a></li>
                        <a href='#' className='cta-1'>Login</a>
                        <a href='#'className='cta--2'>Sign up</a>
                    </ul>
              }

</div>

              {/* <ul className='nav-items'>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Contact</a></li>
                        <a href='#' className='cta-1'>Login</a>
                        <a href='#'className='cta--2'>Sign up</a>
                    </ul> */}
            
          </nav>
        </div>
    </header>
  )
}

export default Navbar