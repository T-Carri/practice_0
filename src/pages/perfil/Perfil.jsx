import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, NavDropdown, Nav, Navbar, Container} from 'react-bootstrap'
import UserContext from '../../context/UserContext'
import './Perfil.css'
import logo from './logo.svg'
import  castle from './castle.png'
export const Perfil = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const {logout}=useContext(UserContext)
  let navigate = useNavigate();
 const logoutHandle =()=>{
  try {
    logout().then(
      navigate('/'),
      sessionStorage.removeItem('Auth Token')
    )
  } catch (error) {
    console.log(error.message)
  }
 }

 useEffect( 
  ()=>{
    let authToken = sessionStorage.getItem('Auth Token')
    console.log(authToken)
    if(authToken){
navigate('/home')
    }
    if(!authToken){
      navigate('/')
    }
  }
  
  ,[]) 
 
  return (
    <body>
<header>
<Navbar  className="NavBar"  >
        <Container >
          <Navbar.Brand href="#home">
            <img 
        
              src={castle}
              width="59"
              height="52"
              className="castle"
              alt="Tarup"
              
            />
          </Navbar.Brand>
        </Container>
        
      </Navbar>
     

      
  </header>
  

  <section   className='section1'>
  <h1>Seccion 1</h1>
  Bienvenido 

tu objetivo es: lograr que una ves logueado mantenga el log de manera profesional 
- Identifica  metodologias con react router dom  para permancer aun con refresh  
</section>
<section   className='section2'>
  <div className='tarup'><h1>Div 2</h1> </div>
  
</section>

  


    </body>
    
    
  )
}
