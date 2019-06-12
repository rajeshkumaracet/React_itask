import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap";
import "jquery";
import "popper.js";

class Nav extends Component {
     render() {
          return (
               <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                         <Link to="/" className="navbar-brand">iTask!</Link>
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div class="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav ml-auto">
                                   <li className="nav-item pb-2">
                                        <Link to="/completed"><button type="button" className="btn btn-success">Completed</button></Link>
                                   </li>
                                   <li className="nav-item pb-2">
                                        <Link to="/pending"><button type="button" className="btn btn-warning">Pending</button></Link>
                                   </li>
                                   <li className="nav-item pb-2">
                                        <Link to="/closed" ><button type="button" className="btn btn-danger">Closed</button></Link>
                                   </li>
                              </ul>

                         </div>
                    </nav>
               </div>
          )
     }
}

export default Nav;
