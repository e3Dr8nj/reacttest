import React, {Component} from 'react'
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            dishes:[ 
                {id:'1',name:'dish1',description:'very tasty'}
                ,{id:'2',name:'dish2',description:'very tasty2'}
            ]
        }
    }
    render(props){
        const menu = this.props.dishes.map(dish=>{return(
        <div className = "col-12 col-md-5 m-1" id={dish.id}>
             <Card key = {dish.id}>
                 <CardImg width="100%" src = {dish.image} alt = {dish.name}></CardImg>
                 <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
             </Card>
        </div>)})
        return(
            <div className = "component">
            <div className ="row">
               
                    {menu}
              
            </div>
            </div>
        )
    }
}
export default Menu