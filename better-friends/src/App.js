import React from 'react';
import axios from 'axios';
import { Route, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Friends from './components/Friends';
import FriendsContainer from './components/FriendsContainer';
import styled from 'styled-components';
import StickyFooter from 'react-sticky-footer';

import './App.css';


class App extends React.Component {

  render() {
    return (
      <AppContainer>
        <ul className="navBar">
          <li>
            <NavLink exact to="/" >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/Register" >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" >
              Login
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/friends" >
              Add a Reminder
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Signup}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/Reminders' render={ (props) => <FriendsContainer/>}/>

        {/* <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#532516",
    padding: "2rem",
    borderTop: '8px solid #090707',
    height: '100px',
    width: '90%'
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
    Add any footer markup here
</StickyFooter> */}

      </AppContainer>
    );
  }
}

const AppContainer = styled.div `
border: 1px solid red;
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

export default App;


// https://best-friend-reminders.herokuapp.com/api/register
// https://best-friend-reminders.herokuapp.com/api/login
