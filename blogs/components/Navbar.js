import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <nav className='nav-bar'>
            <Link className='nav-btn' href='/' passHref>Home</Link>
            <Link className='nav-btn' href='/blogs' passHref>Essays</Link>
            <Link className='nav-btn' href='/projects' passHref>Projects</Link>
            <Link className='nav-btn' href='/bookshelf' passHref>Bookshelf</Link>
            <Link className='nav-btn' href='/bio' passHref>About me</Link>
            {/* <div className='dot'></div> */}
          </nav>
    </div>
    );
}

export default Navbar;
