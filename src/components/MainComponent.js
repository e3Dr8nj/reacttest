import React, {Component} from 'react'

import DishDetail from './DishDetailComponent.js'
import Menu from './MenuComponent.js'
import {Navbar,NavbarBrand} from 'reactstrap'
import DISHES from '../shared/dishes'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
      ,selectedDish:1
    };
  }
   onDishSelect=(dishId)=>{
       console.log('dishselect')
       this.setState({selectedDish:dishId})
       console.log(this.state.selectedDish)
   }
    
    render(props){return(<div>
      <Navbar dark color ="primary">
         <div className ="container">
           <NavbarBrand href='/2'>Ristorane2</NavbarBrand>
         </div>
    </Navbar>
    <Menu dishes={this.state.dishes}
     onClick={(dishId)=>this.onDishSelect(dishId)}
    ></Menu>
    <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
    </div>)}
    
    
}

export default Main;