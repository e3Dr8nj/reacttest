import React, {Component} from 'react'

import DishDetail from './DishDetailComponent.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js'
import Menu from './MenuComponent.js'
import Home from './HomeComponent.js'
import DISHES from '../shared/dishes'
import {Switch,Route,Redirect} from 'react-router-dom'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
     // ,selectedDish:null
    };
  }
  /*
   onDishSelect=(dishId)=>{
       console.log('dishselect')
       this.setState({selectedDish:dishId})
       console.log(this.state.selectedDish)
   }
   */
   
    render(props){
      const HomePage =()=>{return(<Home />)}
      return(<div>
     <Header/>
     <Switch>
       <Route path='/home' component={HomePage}></Route>
       <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
       <Redirect to='/home'></Redirect>
     </Switch>
    <Footer></Footer>
    </div>)}
    
    
}

export default Main;