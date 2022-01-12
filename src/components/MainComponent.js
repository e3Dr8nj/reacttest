import React, {Component} from 'react'

import DishDetail from './DishDetailComponent.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js'
import Menu from './MenuComponent.js'

import DISHES from '../shared/dishes'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
      ,selectedDish:null
    };
  }
   onDishSelect=(dishId)=>{
       console.log('dishselect')
       this.setState({selectedDish:dishId})
       console.log(this.state.selectedDish)
   }
    
    render(props){return(<div>
     <Header/>
    <Menu dishes={this.state.dishes}
     onClick={(dishId)=>this.onDishSelect(dishId)}
    ></Menu>
    <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
    <Footer></Footer>
    </div>)}
    
    
}

export default Main;