import React, {Component} from 'react'
import Contact from './ContactComponent.js'
import DishDetail from './DishDetailComponent.js'
import Header from './HeaderComponent.js'
import Footer from './FooterComponent.js'
import Menu from './MenuComponent.js'
import Home from './HomeComponent.js'
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import {Switch,Route,Redirect} from 'react-router-dom'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
      ,comments:COMMENTS
      ,promotions:PROMOTIONS
      ,leaders:LEADERS

      ,selectedDish:null
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
      const HomePage =()=>{return(<Home 
        dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
        promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
        leader={this.state.leaders.filter((leader)=>leader.featured)[0]}

        />)}
        const DishWithId = ({match})=>{
          console.log(parseInt(match.params.dishId,10))
          let dishId = parseInt(match.params.dishId,10)
          let comments = this.state.comments.filter(c=>c.dishId===dishId)
          console.log(comments)
          return(
            <DishDetail 
            dish={this.state.dishes.filter( (dish)=>dish.id===dishId)[0]}
            comments={comments}
            ></DishDetail>
          )
        }
      return(<div>
     <Header/>
     <Switch>
       <Route path='/home' component={HomePage}></Route>
       <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}></Menu>}></Route>
      <Route path='/menu/:dishId' component={DishWithId} />
       <Route path='/contactus' component={Contact}></Route>
       <Redirect to='/home'></Redirect>
     </Switch>
    <Footer></Footer>
    </div>)}
    
    
}

export default Main;