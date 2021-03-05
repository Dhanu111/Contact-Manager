import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
class WelcomeComponent extends Component{
    render(){
        return(
            <>
                <h1>welcome</h1>
                <div className ="container">
                Welcome {this.props.match.params.name}. What you want like to do? <br/>
                <Link to ="/addContact">Add Contact</Link><br/>
                <Link to ="/viewContacts">View Contacts</Link><br/>
                <Link to ="/updateContacts">update Contacts</Link><br/>
                <Link to ="/deleteContacts">delete Contacts</Link><br/>
                </div>
            </>
        )
             
    }
}
export default WelcomeComponent