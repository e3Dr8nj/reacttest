import React, {Component} from 'react'

import DishDetail from './DishDetailComponent.js'
import Menu from './MenuComponent.js'
import {Alert, Navbar,NavbarBrand} from 'reactstrap'
import DISHES from '../shared/dishes'
//---
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class ComponentComment extends Component{
    constructor(props){
      super(props)
    }
    render(props){
      return(
        <div>
          <ul>
            <li>{this.props.comment.comment}</li>
            <li>{this.props.comment.author+" "+new Date(this.props.comment.date).toString()}</li>
          </ul>
        </div>
      )
    }
}
class ComponentComments extends Component{
  constructor(props){
    super(props)
  }render(props){
    let comments = this.props.dish.comments.map(comment=>{return(<ComponentComment comment={comment}/>)})
    return(
    <div className="col-12 col-md-5 m-1">
    {comments}
    </div>
    )
  }
}
class ComponentDishDetail extends Component{
   constructor(props){
     super(props);
     this.state={
       
       }
     }
     render(props){
       console.log('dishDetail')
       console.log(props)
       return(
       <div className='container'>
           <div className='row'>
             
        <ComponentDish dish={this.props.dish} onClick2={()=>{}}></ComponentDish>
        <ComponentComments dish={this.props.dish}> </ComponentComments>     
           </div>
         </div>
       )
     }
}
class ComponentDish extends Component{
  constructor(props){
    super(props)
  }
  render(props){
    console.log('componentDish')
    console.log(props)
    return(
      <div className='col-12 col-md-5 m-1'>
      <Card onClick={()=>this.props.onClick2(this.props.dish.id)} key={this.props.dish.id}>
       <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
       <CardImgOverlay>
       <CardTitle>{this.props.dish.name}</CardTitle>
       </CardImgOverlay>
       </Card>
      </div>
    )
  }
}
class ComponentMenu extends Component{
    constructor(props){
      super(props)
      this.state={}
    }render(props){
      let dishes= this.props.dishes.map(dish=>{return(
        <ComponentDish dish={dish} onClick2={dishId=>this.props.onClick2(dishId)}></ComponentDish>
        )})
      return(
        <div className='container'>
        <div className='row'>

     {dishes}
        
        </div>
        </div>
      )
    }
}
//---
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
    //__
    onDishSelect2=(dishId)=>{
       this.setState({selectedDish:dishId})
    }
    //__
    render(props){return(<div>
      <Navbar dark color ="primary">
         <div className ="container">
           <NavbarBrand href='/2'>Ristorane2</NavbarBrand>
         </div>
    </Navbar>
    {/*<Menu dishes={this.state.dishes}
     onClick={(dishId)=>this.onDishSelect(dishId)}
    ></Menu>*/}
    <ComponentMenu  dishes={this.state.dishes} onClick2={(dishId)=>this.onDishSelect2(dishId)} ></ComponentMenu>
    {//<DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
    }
    <ComponentDishDetail  dish={this.state.dishes.filter(dish=>dish.id===this.state.selectedDish)[0]} 
    />
    </div>)}
    
    
}

export default Main;