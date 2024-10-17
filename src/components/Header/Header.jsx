import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const [open, setopen] = useState(false)
  const Tooglemenu = () => {
    return setopen(!open)
  }
  const CloseMenu = () => {
    setopen(false)
  }
  return (
    <div>
      <img
        src='https://w7.pngwing.com/pngs/639/1013/png-transparent-hamburger-button-computer-icons-drop-down-list-fast-food-menu-rectangle-share-icon-pancake.png'
        className='menudesplagble'
        onClick={Tooglemenu}
      ></img>
      <header className={open ? 'menuvertical' : 'nodisplay'}>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeclassname='active' onClick={CloseMenu}>
                {' '}
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/products'
                activeclassname='active'
                onClick={CloseMenu}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/favoritos'
                activeclassname='active'
                onClick={CloseMenu}
              >
                {' '}
                Favourite products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
