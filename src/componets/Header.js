import React from 'react';
import logo from '../images/rm.png';

function Header(){
  return (
   <header>
     <nav className='nav'>
     <img src={logo} className = "Nav-logo" />
     <h3>Rick and Monty </h3>
     <h4>Static proj-2</h4>
     </nav>
   </header>
  )
}
export default Header;