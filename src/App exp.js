import React, {Component} from 'react'

import parfum from './shared2/parfum.js'
import jewerly from './shared2/jewerly.js'
import './App.css';
import Main from './components/MainComponent.js'
import {BrowserRouter} from 'react-router-dom'
import {Switch,Route,Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Navbar,NavbarBrand,Jumbotron,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap'
import  {Media,Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import {NavLink} from 'react-router-dom'
let toggler=false
class Top extends Component{
    constructor(props){
        super(props)
        this.state={
           toggler:false
        }
        this.togglerNav=this.togglerNav.bind(this)
      }
   togglerNav(){
     this.setState({toggler:!this.state.toggler})
   }  
   render(props){
       return(
           <React.Fragment>
            
          <Navbar dark color expand='md'>
            <div className ='container'>
           <NavbarToggler  onClick={this.togglerNav}>Menu
           </NavbarToggler>
           <NavbarBrand className='mr-auto' href='/'>
               <img src='assets/images/logo.png' height='30' width='41' alt='Ristorante Con Fusion'></img>
           </NavbarBrand>
           
           <Collapse isOpen={this.state.toggler} navbar>
           <Nav navbar>
             <NavItem>
               <NavLink to='/jewerly'>Jewerly</NavLink>
             </NavItem>
             <NavItem>
               <NavLink to='/parfum'>Parfum</NavLink>
             </NavItem>
           </Nav>
           </Collapse>
           </div>
      </Navbar>
        <div>
            <div className ='container'>
                <div className = 'row row-header'>
                    <div className = ' col-12 col-sm-6'>
                        <h1>JoyStore</h1>
                        <p>We take inspirations from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle  your culinary senses</p>
                    </div>
                </div>
            </div>
        </div>

           </React.Fragment>
       )
   }
}

function RenderMenuItem({dish,onClick}){
    return(
        <Card onClick={()=>onClick(dish.id)} key = {dish.id}>
                 <CardImg width="100%" src = {dish.image} alt = {dish.name}></CardImg>
                 <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
             </Card>
    )
}
const Blocks=(props)=>{
  let b = props.items.map(item=>{return(
    <div className='col-12 col-md-5 m-1'>
      {item.name}
     <RenderMenuItem dish={item}></RenderMenuItem>
      </div>
      
      )}
  )
  return(<div>
      {b}
  </div>)
}

const Bottom=(props)=>{
    return(<div>
     <Link to="/jewerly">Jewerly</Link>
     <Link to="/parfum">Parfum</Link>
    </div>)
}
function Middle(props){
  let content=''
  if(props.data=='jewerly') content='jewerly'
  if(props.data=='parfum') content='parfum'
  return(<div>
    {content}
    <div className='container'>
      <div className='row'>
  <Blocks items={dataStore[content]}></Blocks>
  </div>
  </div>
  </div>)
}

class App extends Component {
   constructor(props){
     super(props)
     this.state={

     }
   }
    
    render(props){return(
      <BrowserRouter>
    <div>
      <Top></Top>
     <Switch >
       <div>
       <Route path='/parfum' component={()=><Middle data={'parfum'}></Middle>}></Route>
       <Route path='/jewerly' component={()=><Middle data={'jewerly'}></Middle>}></Route>
       <Redirect to='/parfum'></Redirect>
       </div>
     </Switch>
    
     <Bottom></Bottom>
    
    </div>
    </BrowserRouter>
    )}
    
}

export default App;



let dataStore={
  parfum:parfum
  ,jewerly:jewerly
}