import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import {withRouter} from 'react-router'

class HeaderComponent extends Component{
    render(){
        const isUserLoggedIN = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIN);
        return(           

           <header>
               <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                   <div>
                       <a href=""className="navbar-brand">Contact Manager </a>
                    </div>
                    <ul className = "navbar-nav">
                        {isUserLoggedIN && <li><Link className ="nav-link" to ="/Welcome/dhanu">Home</Link></li>}
                        {isUserLoggedIN && <li><Link className ="nav-link" to = "/addContact">Add Contact</Link></li>}
                        {isUserLoggedIN && <li><Link className ="nav-link" to = "/viewContacts">View Contact</Link></li>}
                        {isUserLoggedIN && <li><Link className ="nav-link" to = "/updateContacts">Update Contact</Link></li>}
                        {isUserLoggedIN && <li><Link className ="nav-link" to = "/deleteContacts">Delete Contact</Link></li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIN && <li><Link className ="nav-link" to ="/login">Login</Link></li>}
                        {isUserLoggedIN && <li><Link className ="nav-link" to = "/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default withRouter(HeaderComponent)