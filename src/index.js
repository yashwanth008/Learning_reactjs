import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componets/Header.js'
import Maincontent from './componets/Maincontent.js'
import Footer from './componets/Footer.js'
import "./App.css";



//components use camel case (first letter caps)
function Tempfunc(){
  return (
    <div>
    <Header/>
    <Maincontent/>
    {/* <Footer/> */}
    
  </div>
  )
}
ReactDOM.render(
  //these are components 
  <Tempfunc/>,
  document.getElementById('root')
);

