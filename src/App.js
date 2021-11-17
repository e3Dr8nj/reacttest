import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent.js'
import {Navbar,NavbarBrand} from 'reactstrap'
import DISHES from './shared/dishes'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  
    
    render(props){return(<div>
      <Navbar dark color ="primary">
         <div className ="container">
           <NavbarBrand href='/'>Ristorane2</NavbarBrand>
         </div>
    </Navbar>
    <Menu dishes={this.state.dishes} ></Menu>
    </div>)}
    
    
}

export default App;
