import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import navigationLinks from '../../utils/navigationLinks'

import './Navigations.scss'

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className='navigation'>
        {
          navigationLinks.map(link => 
            <Link 
              to={link.path}
              key={link.id}
              className={`navigation__link ${location.pathname === link.path ? 'navigation__link--active' : ''}`}
            >
              {link.name}
            </Link>
        )}

    </nav>
  )
}
