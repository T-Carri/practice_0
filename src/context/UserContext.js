import React,{ createContext, useEffect, useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase/Firebase';


const UserContext = createContext();
export default UserContext

export const AuthContextProvider = ({ children }) => {
  
  
    const [user, setUser] = useState(null);
    // const dispatch=useDispatch();
    //version normal 
  
  
   
    
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
      
      
    };
   
  
     const signIn = (email, password) =>  {
      return signInWithEmailAndPassword(auth, email, password)
      
     }
  
  
    const logout = () => {
        return signOut(auth)
        
    }
    console.log('user',user)
  
    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{  
        console.log(currentUser)
          setUser(currentUser)
     
        } 
         ); 
    
         return ()=> unsubscribe()
        
        }, []);
        
        return (
          <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
          </UserContext.Provider>
        );
      };
        
     
  
  
      
  