import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent.js'
import {Navbar,NavbarBrand} from 'reactstrap'

function App() {
  return (
    <div >
      <Navbar dark color ="primary">
         <div className ="container">
           <NavbarBrand href='/'>Ristorane2</NavbarBrand>
         </div>
    </Navbar>
    <Menu />
    </div>
  );
}

export default App;
