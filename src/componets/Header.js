import React from 'react';
import logo from '../images/logo.png';

function Header(){
  return (
   <header>
     <nav className='nav'>
     <img src={logo} className = "Nav-logo" />
     <h3>ReactFacts </h3>
     <h4>Static proj-1</h4>
     </nav>
   </header>
  )
}
export default Header;