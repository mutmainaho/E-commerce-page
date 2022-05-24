import React, {Component} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
//import {Route} from "react-router";


export default class App extends Component {
   render (){
     return(
       <div>
         <BrowserRouter>
        
          <NavBar/> 
          <Home/>
          <Routes>
         <Route exact path='/'>
         
         </Route> 
         </Routes>
         </BrowserRouter>
 
       </div>
     );
   }

}

