import React, {Component} from 'react'

class ContactDeleteComponant extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contactID : 0
           
            };
       
      }

      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit = (event) => {
        alert('A Contact was updated: ' + this.state);
    
        fetch(`http://localhost:8080/deleteContact/${this.state.contactID}`, {
            method: 'DELET',
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
                      <label>ContactId</label>
                      </div>
                      <div className = "inputText">
                      <input type ="Number" name="contactID" value = {this.state.value} onChange={this.handleChange} className="textBox"/>
                      </div>
                      <input type="submit" value="Submit" className="button"/>
                      </form>
                    </div>
            </div>
        )
    }
}

export default ContactDeleteComponant