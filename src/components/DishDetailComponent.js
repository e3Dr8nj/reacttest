
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

import React, { Component } from 'react'
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
export default DishDetail