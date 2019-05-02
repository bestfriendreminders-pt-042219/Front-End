import React from 'react';
import { Link } from 'react-router-dom';
import FriendsContainer from './FriendsContainer';


const Home = () => {

    return (
        <div>
            <h1>Better Friends are Best Friends</h1>
            
            <Link to="/login"><button>Login</button></Link>
            <Link to="/Register"><button>Signup</button></Link>
            {/* <Link to="/Reminders"><button>Signup</button></Link> */}

            <FriendsContainer/>

        </div>
    )
}

export default Home;