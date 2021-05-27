/**
 * Author: Lakshman Veti
 * Type: Component
 * Objective: To render login page
 * Associated Route/Usage: /login
*/

import React from 'react';
import authService from '../../../services/authService';

class Login extends  React.Component{  
  constructor(props) {
    super(props)
    authService.clear();

    this.state = {
      username: '',
      password: '',
      remember: false,
      submitted: false,
      error: '',
      loading: false,
      collapsed:false
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.setCollapsed = this.setCollapsed.bind(this);
  }
  setCollapsed(){
    this.setState({collapsed: !this.state.collapsed});
    //this.forceUpdate();
}

handleChange(e) {
  var { name, value } = e.target;
  
  if(name == 'remember'){
    this.state.remember = !this.state.remember;
    console.log(this.state)
  }else{
    this.setState({ [name]: value });
  }
}

handleSubmit(e) {
  e.preventDefault();

  this.setState({ submitted: true });
  const { username, password, remember} = this.state;

  // stop here if form is invalid
  if (!(username && password)) {
      return;
  }
  this.state.loading = true;
  var it = this;
  authService.login(username, password, remember)
      .then(
          user => {
            if(remember) localStorage.setItem('remember', true);
            
            if(user && user.username){
              localStorage.setItem('user', JSON.stringify(user));
              const { from } = it.props.location.state || { from: { pathname: "/upload" } };
              it.props.history.push(from);
            }else{
              it.setState({ error:true, loading: false });  
            }
              
          },
          error => {
            it.setState({ error, loading: false });
          }
      );
}

render() {
  //const { username, password, submitted, loading, error } = this.state;
  return (
    <div>
      Login
    </div>
  )
}
}

export default Login
