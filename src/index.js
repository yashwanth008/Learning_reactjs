import React from 'react';
import ReactDOM from 'react-dom';
import Card from './componets/card.js'
import Data from './componets/Data.js'
// import logo from './images/photo.jpeg'
// import logo1 from './images/logo.png'
import Header from './componets/Header.js'
import Maincontent from './componets/Maincontent.js'
import Footer from './componets/Footer.js'
import "./App.css";




//components use camel case (first letter caps)
function Tempfunc(){
  const cards = Data.map(item =>{
    return (
      <Card
      item = {item}//for this u have to use props.item.---
      // {...item} for this to work u have  to go back to card remove all the .item after props
        // img={item.img}
        // name={item.name}
        // gender={item.gender}
        // status={item.status}
        // openspots={item.openspots}
        // location = {item.location}
      />
    )
  })
  return (
    <div>
      <Header />
    {cards}
    
    
    {/* <Card 
        img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      rate = "6.0"
      num = "4"
      con = "USA"
      title = "Life lesson by kate perry is written in this book"
    />
    <Card 
      img ="logo.png"
      rate = "6.0" // {6.0}
      num =  "4" //{4}
      con = "USA"
      title="Life lesson by kate perry is written in this book"
    /> */}
     
     {
    /*
    <Maincontent/>
    <Footer/> */}
    {/* <Data/> */}
    

  
    
  </div>
  )
}
ReactDOM.render(
  //these are components 
  <Tempfunc/>,
  document.getElementById('root')
);

