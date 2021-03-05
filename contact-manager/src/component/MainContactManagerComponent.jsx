

import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelComeComponent from './WelcomComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import ContactAddComponant from './ContactAdd.jsx'
import ContactDeleteComponant from './ContactDelete.jsx'
import ContactViewComponant from './ContactDisplay.jsx'
import ContactUpdateComponant from './ContactUpdate.jsx'
class MainContactManagerComponent extends Component{
    render(){
        return(
            <div className='ToDoApp'>
                <>
                    <Router>
                            <HeaderComponent/>
                            <Switch>
                                <Route path = "/" exact component = {LoginComponent}/>
                                <Route path = "/login" component = {LoginComponent}/>
                                <AuthenticatedRoute path = "/welcome/:name" component = {WelComeComponent}/> 
                                <AuthenticatedRoute path = "/addContact" component = {ContactAddComponant}/>
                                <AuthenticatedRoute path = "/viewContacts" component = {ContactViewComponant}/>
                                <AuthenticatedRoute path = "/updateContacts" component = {ContactUpdateComponant}/>
                                <AuthenticatedRoute path = "/deleteContacts" component = {ContactDeleteComponant}/>                              
                                <AuthenticatedRoute path = "/logout" component = {LogoutComponent}/>
                                <Route component ={ErrorComponent}/>
                            </Switch>
                            <FooterComponent/>
                    </Router>
                </>              
            </div>
        )

        
    }
}
export default MainContactManagerComponent
