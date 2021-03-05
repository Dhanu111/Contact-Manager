import React, {Component} from 'react'
import ContactDataService from './RetriveContactService.js'
class ContactUpdateComponant extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contactID : 0,
            firstName: '',
             lastName: '',
             email: '',
             phoneNumber:'',
             status: ''
            };
       
      }

      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit = (event) => {
        alert('A form was updated: ' + this.state);
    
        fetch('http://localhost:8080/updateContact', {
            method: 'PUT',
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
            <div class ="contactDetai">
                <div className = "formDiv">           
                <form onSubmit={this.handleSubmit}>
                  <div className = "labels">
                  <label>ContactID</label><br/>
                  <label>FirstName</label><br/>
                  <label>LastName</label><br/>
                  <label>Email</label><br/>
                  <label>Phone Number</label><br/>
                  <label>Status</label><br/>
                  </div>
                  <div className = "inputText">
                  <input type = "number" name = "contactID" value = {this.state.value} onChange={this.handleChange} className="textBox"/><br/>
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


export default ContactUpdateComponant