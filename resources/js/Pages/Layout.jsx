
import React from 'react'
import '../../css/layout.css';
import 'typeface-merriweather';
import { Link } from '@inertiajs/inertia-react';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
        <Link href='/contact'>
            <h1>Contact App</h1>
        </Link>
        <Link href='/logout'>
        <h3>Logout</h3>
        </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className='footer-content'>
        <h3>About Us</h3>
        <div className="footer-member">
        <div className='footer-about'>
        <p>Dheril Ismail Octavians</p>
        <p>50421364</p>

        </div>
        <div className='footer-about'>
        <p>Laurens Fernando Pasaribu</p>
        <p>50421744</p>

        </div>

        </div>
        </div>
      </footer>
    </>

  )
}

export default Layout
