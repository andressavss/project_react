import './Nav.css'
import './NavItem.jsx'
import React from 'react'
import NavItem from './NavItem.jsx'


export default props =>
    <aside className='menu-area'>
        <nav className="menu">
           <NavItem {...props} />
        </nav>
    </aside>