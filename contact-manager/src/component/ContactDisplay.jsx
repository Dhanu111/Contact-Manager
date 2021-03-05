
import React, {Component} from 'react'
import ContactDataService from './RetriveContactService.js'

class ContactViewComponant extends Component{
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            message: null
        }
        this.refreshContacts = this.refreshContacts.bind(this)
    }
    componentDidMount() {
        this.refreshContacts();
    }
    refreshContacts() {
        ContactDataService.retriveAllContactData()
            .then(
                response => {
                    console.log(response);
                    this.setState({ contacts: response.data })
                }
            )
    }
    render(){
        return(
            <div class ="contactDetai">
              <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contacts =>
                                        <tr key={contacts.contactID}>
                                            <td>{contacts.contactID}</td>
                                            <td>{contacts.firstName}</td>
                                            <td>{contacts.lastName}</td>
                                            <td>{contacts.phoneNumber}</td>
                                            <td>{contacts.email}</td>
                                            <td>{contacts.status}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default ContactViewComponant