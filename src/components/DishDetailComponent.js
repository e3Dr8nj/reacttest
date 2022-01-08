
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

import React, { Component } from 'react'
class DishDetail extends Component{
    
        componentDidMount(){
            console.log('DishDetailComponent componentDidMount invoked')
        }
        componentDidUpdate(){
            console.log('DishDetailComponent componentDidUpdate invoked')
        }
        renderDish(dish){
            return(
                <Card>
                    <CardImg width="100%" src = {dish.image}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        renderComments(comments){
            if(comments===null) return(<div></div>)
            const result = comments.map((comment)=>this.renderComment(comment) )
            return(<div><h4>Comments</h4>
                <ul class="list-unstyled">
                {result}
                </ul></div>)
        }
        
        renderComment(comment){
        
            return(<div><li>{comment.comment}</li><li>{"-- "+comment.author+", "+new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li></div>)
        }
    
       render(props){
        console.log('DishDetailComponent render invoked')
          if(this.props.dish==null) return(<div></div>)
          console.log('dishdetail')
           return(
           <div className ="container">
             <div className="row" >
                     <div  className="col-12 col-md-5 m-1">
                         
                     {this.renderDish(this.props.dish)}
                
                       </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
            
        </div>
        </div>
                
            )}                   
}
export default DishDetail