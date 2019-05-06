import React from 'react';
//import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
//import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import LogOut from './components/LogOut'
import Friends from './components/Friends';
import FriendsContainer from './components/FriendsContainer';
import styled from 'styled-components';
import StickyFooter from 'react-sticky-footer';

import './App.css';


class App extends React.Component {

  render() {
    return (
      <AppContainer>
        <TopBar>
            <h1>
              BETTER FRIENDS REMINDERS
            </h1>
        <ul className="navBar">
        <li>
          </li>
          <li>
            <NavLink exact to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <LogOut />
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
        </TopBar>
        <Route exact path='/' component={FriendsContainer}/>
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Signup}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/Reminders' component= {FriendsContainer}/>

        <StickyFooter
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
</StickyFooter>

      </AppContainer>
    );
  }
}

const AppContainer = styled.div `
border: 1px solid red;
background-color: #975D41;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-star;
font-size: calc(8px + 2vmin);
color: white;
`

const TopBar = styled.div`
border-bottom: 5px solid #D4D4D4;
background: #532516;
font-color: #D4D4D4;
width: 100%;
height: auto;
`

export default App;


// https://best-friend-reminders.herokuapp.com/api/register
// https://best-friend-reminders.herokuapp.com/api/login



// // Colors
// @dark: #090707;
// @almost-white: #D4D4D4; 	
// @mid-grey: #5C5752; 
// @redish-brown: #532516;
// @lighter-gray:#A5A4A2; 	
// @light-brown: #975D41;
// @grey-beige: #978675;

// // Color assigments
// // Navigation
// @nav-font-color: @almost-white;
// @header-font-color: @almost-white;
// @header-border-bottom: @almost-white;

// // Main part of DOM
// @main-background-color: @light-brown;
// @header-background: @redish-brown;
// @section-background: @grey-beige;
// @sectionH2-font-color: @dark;

// // Footer
// @footer-background: @redish-brown;
// @footer-top-border: @dark;

// // Sign in button
// @button-color: @redish-brown;
// @button-border: @lighter-gray;
// @button-font-color: @almost-white;

// // Mobile - less than 400px;
// @mobile: ~"(max-width: 500px)";
// @pad: ~"(max-width: 800px)";
// @padLarge: ~"(max-width: 1040px)";
