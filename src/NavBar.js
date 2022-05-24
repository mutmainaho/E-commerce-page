import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import Action from "./images/Actions.png";



class NavBar extends Component {
    render() {
      return (
          <div>
            <React.Fragment>
            <header>
         <nav id="navbar">
         <ul>
           <li >
             <Link to="/" >Women</Link>
           </li>
           <li>
             <Link to="/" >Men</Link>
           </li>
           <li>
             <Link to="/" >kids</Link>
           </li>
           <li>
             <Link to="/" >
                 <img src= {Logo} alt="logo" />
             </Link>
           </li>
           <li>
             <Link to="/" >
                 <img src= {Action} alt="logo" />
             </Link>
           </li>
           
         </ul>
       </nav> 
       </header>
       </React.Fragment>
          </div>
      )

      }
    }
    export default NavBar;