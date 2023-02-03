import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/MainBuildInvLogo.jpg';
import tabletLogo from '../../assets/images/MainBuildInvLogoTabletPlus.jpg';
import './Header.scss';

import { AiOutlineHome } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/" className='nav__header'>
          <img className='nav__logo' alt='Company logo' src={logo} />
          <img className='nav__logo--tablet' alt='Modified company logo for tablet and larger screens' src={tabletLogo} />
        </Link>
      </nav>
      
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink to="/" className='nav__link nav__link-icon' activeClassName="nav__link--active">
            {AiOutlineHome}
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to="/supplies" className='nav__link' activeClassName="nav__link--active">
            Supplies
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to="/machinery" className='nav__link' activeClassName="nav__link--active">
            Machinery
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to="/contact" className='nav__link' activeClassName="nav__link--active">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header