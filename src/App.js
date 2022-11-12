import React from 'react';
import './App.css';
import { Login } from './pages/access/Login'; 
import { Perfil } from './pages/perfil/Perfil';
import { AuthContextProvider } from './context/UserContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <AuthContextProvider>
    <div className="App">

    <Router>  
<Routes>


    <Route exact path="/" element={<Login/>} />
    <Route  path="/home" element={<Perfil/>} />

         
     
</Routes>



    </Router>

    </div>


    </AuthContextProvider>
  );
}

export default App;
