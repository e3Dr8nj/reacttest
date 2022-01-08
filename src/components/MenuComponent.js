import React, {Component} from 'react'
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'


class Menu extends Component{
    constructor(props){
        super(props)
       
        
        console.log('Menu component is invoked')
        
    }
    componentDidMount(){
        console.log('Menu component componentDidMount is invoked')
            
    }
    

    dishRender=(dish)=>{
        
        if(dish!=null){
           
            return(
                //<Dd dish={this.state.selectedDish}></Dd>
             //   <DishDetail dish={this.state.selectedDish} />
                /*
                
                */
               <div></div>
            )
            
        }else{return (<div></div>)}
    }
    render(props){
       
        const menu = this.props.dishes.map((dish)=>{return(
        <div className = "col-12 col-md-5 m-1" key={dish.id}>
             <Card onClick={()=>this.props.onClick(dish.id)} key = {dish.id}>
                 <CardImg width="100%" src = {dish.image} alt = {dish.name}></CardImg>
                 <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
             </Card>
        </div>) })
        console.log('Menu render is invoked')
        
        return(
            
            <div className = "container" > 
            <div className ="row" >
                    
                    {menu}
              
            </div>
            
            </div>
        )
    }
}
export default Menu