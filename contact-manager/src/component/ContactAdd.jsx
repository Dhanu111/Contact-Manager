import React, {Component} from 'react'
import  { Redirect } from 'react-router-dom'
class ContactAddComponant extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
             lastName: '',
             email: '',
             phoneNumber:'',
             status: ''
            };
        this.redirectToView = this.redirectToView.bind();
      }

      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
      redirectToView() {
        
        this.props.history.push('/viewContacts')
      }
      handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);
    
        fetch('http://localhost:8080/saveContact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
          }).then(function(response) {
            console.log(response)
           
           // return response.json();
          });
    
        event.preventDefault();
    }
    
    render(){
        return(
            <div className ="contactDetai">    
            <div className = "formDiv">           
                <form onSubmit={this.handleSubmit}>
                  <div className = "labels">
                  <label>FirstName</label><br/>
                  <label>LastName</label><br/>
                  <label>Email</label><br/>
                  <label>Phone Number</label><br/>
                  <label>Status</label><br/>
                  </div>
                  <div className = "inputText">
                  <input type ="text" name="firstName" value = {this.state.value} onChange={this.handleChange} className="textBox"/><br/>
                    
                    <input type ="text" name="lastName"  value = {this.state.value} onChange={this.handleChange} className="textBox"/><br/>
                    
                    <input type ="text" name="email" value= {this.state.value} onChange={this.handleChange} className="textBox"/><br/>
                    
                    <input type ="text" name="phoneNumber" value = {this.state.value} onChange={this.handleChange}className="textBox"/><br/>
                    <div className ="radioDiv">
                    <input type="radio" value="active" name="status" onChange={this.handleChange}/> Active
                    <input type="radio" value="inactive" name="status" onChange={this.handleChange}/> Inactive        
                    </div><br/>
                  </div>            
                   
                 
                    <input type="submit" value="Submit" className="button"/>
                

                </form>
                </div>
            </div>
        )
    }
}

export default ContactAddComponant