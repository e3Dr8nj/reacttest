
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

import React from 'react'

        function RenderDish({dish}){
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
        function RenderComments({comments}){
            if(comments===null) return(<div></div>)
            const result = comments.map((comment)=>renderComment(comment) )
            return(<div><h4>Comments</h4>
                <ul class="list-unstyled">
                {result}
                </ul></div>)
        }
        
        function renderComment(comment){
        
            return(<div><li>{comment.comment}</li><li>{"-- "+comment.author+", "+new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li></div>)
        }
    
       const DishDetail =(props)=>{
        console.log('DishDetailComponent render invoked')
          if(props.dish==null) return(<div></div>)
          console.log('dishdetail')
           return(
           <div className ="container">
             <div className="row" >
                     <div  className="col-12 col-md-5 m-1">
                         
                     <RenderDish dish={props.dish}></RenderDish>
                
                       </div>
                    <div  className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
            
        </div>
        </div>
                
            )}                   

export default DishDetail