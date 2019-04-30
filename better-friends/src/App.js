import React from 'react';
import axios from 'axios';
import { Route, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Friends from './components/Friends';
import FriendsContainer from './components/FriendsContainer';

import './App.css';

class App extends React.Component {

  // componentDidMount(){
  //   // this.getMessages();
  //   console.log('Mounting...', this.state.messages)
  //   const userId = localStorage.getItem('userId')
  //   if(userId) {
  //     axios
  //       .get(`https://best-friend-reminders.herokuapp.com/:${userId}`)
  //       .then(res => {
  //         console.log(res.data)
  //         this.setState({
  //           messages: res.data
  //         })
  //       })
  //     }
  // }
  
  // getMessages = () => {
  //   const token = localStorage.getItem("token")
  //   const requestOptions = {
  //     headers: {
  //       authorization: token
  //     }
  //   }
  //   if (!token) this.props.history.push("/login")
  //   else {
  //     axios
  //     .get('https://best-friend-reminders.herokuapp.com/api/reminders/', requestOptions)
  //     .then(res => this.setState({ friends: res.data }))
  //     .catch(err => console.log(err));
  //   }
  // }


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
            <NavLink to="/Register" >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" >
              Add a Reminder
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/Reminders' component={FriendsContainer}/>

        {/* <FriendsContainer messageData={
            this.state.message
          }/> */}
      </div>
    );
  }
}

export default App;


// https://best-friend-reminders.herokuapp.com/api/register
// https://best-friend-reminders.herokuapp.com/api/login
