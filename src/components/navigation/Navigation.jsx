import React from 'react'
import { Link } from 'react-router-dom';

import './Navigations.scss'

export default function Navigation() {
  return (
    <nav className='navigation'>
        <Link className='navigation__link' to="/">Главная</Link>
        <Link className='navigation__link' to="/todo">TODO</Link>
    </nav>
  )
}
