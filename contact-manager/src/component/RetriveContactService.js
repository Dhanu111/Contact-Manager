import axios from 'axios'

class ContactDataService{
    retriveAllContactData(){
        return axios.get('http://localhost:8080/getAllContact');
    }

    updateContacts(contact,id){
        return axios.put(`http://localhost:8080/updateContact/${id}`, contact,{headers: {
            'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response)
        })
    }
 }


export default new ContactDataService()