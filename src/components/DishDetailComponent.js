
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
          if(this.props.dish==null) return(<div></div>)
           return(
            <div className = "container">
                <div className="row">
                     <div  className="col-12 col-md-5 m-1">
                         
                     <Card>
                    <CardImg width="100%" src = {this.props.dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                
            </div>
           <div  className="col-12 col-md-5 m-1">hhh</div>
            
        </div>
                
            </div>)}                   
}
export default DishDetail