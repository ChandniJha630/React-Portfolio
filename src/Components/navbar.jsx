import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className='sticky z-50 top-0'>
      <nav>
        <ul className='flex nav-text text-xl justify-end gap-12 justify-items-center'>
          <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">
            <NavLink
              to="/" className={({isActive}) =>` ${isActive ? "text-white" : "nav-text"}`}>
              Home
            </NavLink>
          </li>
          <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">
            <NavLink
              to="/about" className={({isActive}) =>` ${isActive ? "text-white" : "nav-text"}`}>
              About
            </NavLink>
          </li>
          <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">
            <NavLink
              to="/project" className={({isActive}) =>` ${isActive ? "text-white" : "nav-text"}`}>
              Project
            </NavLink>
          </li>
          <li className="hover:text-white hover:shadow-xl hover:backdrop-brightness-200 pl-5 pr-5 pt-5 pb-5">
            <NavLink
              to="/contact" className={({isActive}) =>` ${isActive ? "text-white" : "nav-text"}`}>
              Contact
            </NavLink>
          </li>
      
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
