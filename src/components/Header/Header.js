import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/" className='nav__home'>
          <h3 className='nav__header'> Main Build Investment Inc </h3>
        </Link>
      </nav>
      
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink to="/" className='nav__link' activeClassName="nav__link--active">
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to="/buildingsupplies" className='nav__link' activeClassName="nav__link--active">
            Building Supplies
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink to="/machinery" className='nav__link' activeClassName="nav__link--active">
            Machinery
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header