import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import Login from './components/Login';
import LogOut from './components/LogOut'
import Signup from './components/Signup';
//import LogOut from './components/LogOut'
import Friends from './components/Friends';
import FriendsContainer from './components/FriendsContainer';
import styled from 'styled-components';
import StickyFooter from 'react-sticky-footer';
import twitter from './img/twitter-brown.png';
import instagram from './img/instagram-brown.png';
import facebook from './img/facebook-brown.png';
import git from './img/github-brown.png';


import './App.css';


class App extends React.Component {

  render() {
    return (
      <AppContainer>
        <TopBar>
            <h1>
              BETTER FRIENDS REMINDERS
            </h1>
        <ul className="navBar" style={{width: '40%'}}>
        
          <li>
            <NavLink exact to="/Reminders" >
              Home
            </NavLink>
          </li>
          <li>
            <a href="https://bestfriendreminders-pt-042219.github.io/UI-Robert/about.html" target='_blank'>
            About Us
            </a>
          </li>
         <li>
           <LogOut />
         </li>
        

        </ul>
        </TopBar>
        <h2>Never Forget The Special Dates!</h2>

      
            {/* <NavLink to="/friends" >
              Add a Reminder
            </NavLink> */}

        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/Reminders' component= {FriendsContainer}/>

            {/* <NavLink to="/friends" >
              Add a Reminder
            </NavLink> */}

    <StickyFooter
    width={'98%'}
    bottomThreshold={80}
    normalStyles={{
      display: 'flex',
      justifyContent: 'space-evenly',
      backgroundColor: "#532516",
      borderTop: '8px solid #090707',
      width: '100%',
      height: '50px',
      paddingRight: '5px',
      paddingLeft: '5px'
      }}
    stickyStyles={{
      // display: 'none',
      // backgroundColor: "rgba(255,255,255,.8)",
      // padding: "2rem"

      backgroundColor: "#532516",
      borderTop: '8px solid #090707',
      height: '50px',
      opacity: '0.60',
      paddingRight: '10px',
      paddingLeft: '10px'
    }}
>
<NavLink to="/friends">
              Add a Reminder
            </NavLink>

</StickyFooter>
    <FooterImages>
    <img src={twitter} style={{width: '40px',height: '40px'}}></img>
    <img src={instagram} style={{width: '35px',height: '35px '}}></img>
    <img src={facebook} style={{width: '30px',height: '30px'}}></img>
    <a href='https://github.com/bestfriendreminders-pt-042219' target='_blank'>
    <img src={git} style={{width: '30px',height: '30px'}}></img>

    </a>
    </FooterImages>

      </AppContainer>
    );
  }
}

const FooterImages = styled.div `
// border: 1px solid red;
background: #532516;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
`

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
a {
  text-decoration: none;
  color: #D4D4D4;
  // font-size: xx-large;
  font-size: .7em;
}
h1 {
  color: #D4D4D4;
  margin: 5px 0 5px 10px;
  font-size: 1.4em;
  font-family: 'Comic Sans MS';
  text-shadow: 2px 2px #090707;
}
h2 {
  color: black;
  font-size: 1em;
  font-weight: ;
  letter-spacing: 10px;
  text-shadow: 1px 1px #A5A4A2;
}

`

const TopBar = styled.div`
border-bottom: 5px solid #D4D4D4;
background: #532516;
font-color: #D4D4D4;
width: 100%;
height: auto;
display: flex;
align-items: center;

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
