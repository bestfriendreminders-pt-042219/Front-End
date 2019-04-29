import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component {

  componentDidMount(){
    this.getMessages();
  }
  
  getMessages = () => {
    const token = localStorage.getItem("token")
    const requestOptions = {
      headers: {
        authorization: token
      }
    }
    if (!token) this.props.history.push("/login")
    else {
      axios
      .get('https://best-friend-reminders.herokuapp.com/api/reminders/', requestOptions)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
    }
  }


  render() {
    return (
      <div className="App">
        <ul className="navBar">
          <li>
            <NavLink exact to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" >
              Login
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/friends' component={Friends}/>
      </div>
    );
  }
}

export default App;


// https://best-friend-reminders.herokuapp.com/api/register
// https://best-friend-reminders.herokuapp.com/api/login
