import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, NavDropdown, Nav} from 'react-bootstrap'
import UserContext from '../../context/UserContext'
import './Perfil.css'
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

<Nav className="NavBar" variant="pills" activeKey="1" onSelect={handleSelect}>
    <Nav.Item>
      <Nav.Link eventKey="1" href="#/home">
        NavLink 1 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="2" title="Item">
        NavLink 2 content
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="3" disabled>
        NavLink 3 content
      </Nav.Link>
    </Nav.Item>
    <NavDropdown title="Funciones" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    </NavDropdown>
    <Nav.Item>   <Button onClick={logoutHandle}> Salir</Button> </Nav.Item>
  </Nav>
      
  </header>
  <section className='root'>

  <section   className='section1'>
  <h1>Seccion 1</h1>
  Bienvenido 

tu objetivo es: lograr que una ves logueado mantenga el log de manera profesional 
- Identifica  metodologias con react router dom  para permancer aun con refresh  
</section>
<section   className='section2'>
  <div className='tarup'><h1>Div 2</h1> </div>
  <div className='extras'><h1>Div 3</h1> </div>
</section>

  </section>


    </body>
    
    
  )
}
