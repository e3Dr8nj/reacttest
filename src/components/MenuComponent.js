import React, {Component} from 'react'
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
///import DishDetail from './MenuComponent.js'
let menu = []
class Dd extends Component{
    render(props){return(<div>{this.props.dish.name}</div>)}
}
class DishDetail extends Component{
    /*
        constructor(props){
            super(props)
            this.state={}
        }
        */
       render(props){
          
           return(
         
            <div className ="row" >
            <div  className="col-12 col-md-5 m-1">
                    {this.props.dish.name}
            </div>
              
            </div>
           

           )
       }
}
class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedDish : null
           , dishes:props.dishes
        /*    dishes:[ 
                {id:'1',name:'dish1',description:'very tasty'}
                ,{id:'2',name:'dish2',description:'very tasty2'}
            ]
            */
        }
        
        console.log('Menu component is invoked')
        
    }
    componentDidMount(){
        console.log('Menu component componentDidMount is invoked')
            
    }
    onDishSelect=(dish)=>{
      this.setState({selectedDish:dish})
        
    }

    dishRender=(dish)=>{
        
        if(dish!=null){
           
            return(
                //<Dd dish={this.state.selectedDish}></Dd>
                <DishDetail dish={this.state.selectedDish} />
                /*
                <Card>
                    <CardImg src = {dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                */
            )
            
        }else{return (<div></div>)}
    }
    render(props){
       
        const menu = this.props.dishes.map((dish)=>{return(
        <div className = "col-12 col-md-5 m-1" key={dish.id}>
             <Card onClick={()=>this.onDishSelect(dish)} key = {dish.id}>
                 <CardImg width="100%" src = {dish.image} alt = {dish.name}></CardImg>
                 <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
             </Card>
        </div>) })
        console.log('Menu render is invoked')
        
        return(
            <div className = "component">
            <div className ="row">
                    
                    {menu}
              
            </div>
            <div className ="row" >
            <div  className="col-12 col-md-5 m-1">
                    {this.dishRender(this.state.selectedDish)}
            </div>
              
            </div>
            </div>
        )
    }
}
export default Menu