import React, {Component} from 'react'
import {Media} from 'reactstrap'
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
        <div key = {dish.id} className = "col-12 mt-5">
             <Media tag="li">
                 <Media left middle>
                     <Media object src={dish.image} alt={dish.name}/>
                 </Media>
                 <Media body className ="ml-5">
                     <Media heading>{dish.name}</Media>
                     <p>{dish.description}</p>
                 </Media>
             </Media>
        </div>)})
        return(
            <div className = "component">
            <div className ="row">
                <Media list>
                    {menu}
                </Media>
            </div>
            </div>
        )
    }
}
export default Menu