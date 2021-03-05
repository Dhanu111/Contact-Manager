import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username : 'dhanu',
            password : '',
            showLoginSucessfull : false,
            hasLoginFailed : false
        }

        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange (event){       
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )

    }
    loginClicked(){
        // dhanu, dummy
        if(this.state.username === 'dhanu' && this.state.password === 'dhanu@123'){
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showLoginSucessfull : true})
            //this.setState({hasLoginFailed :false})            
        }         
        else{
            this.setState({showLoginSucessfull:false})
            this.setState({hasLoginFailed : true})
        }
       
    }
    
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className ="container">
                    {/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className = "alert alert-warning">Invalid Credentials</div> }              
                    {/*<ShowSucessfullMsg showLoginSucessfull = {this.state.showLoginSucessfull}/>*/}
                    User Name :<input type ="text" name ="username" value={this.state.username} onChange={this.handleChange}/>
                    Password : <input type = "password" name = "password" value={this.state.password} onChange={this.handleChange}/>
                    <button className = "btn btn-success" onClick = {this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent