import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LogIn extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = event => {
    event.preventDefault();

    axios
      .post(
        'https://best-friend-reminders.herokuapp.com/api/login',
        this.state.credentials
      )

      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/Reminders');
      })

      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <h1>Log In</h1>

        <form onSubmit={this.login}>
          <input
            type="string"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          
            <button> Log In </button>
          
        </form>

        <p>
          Need to create an account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </>
    );
  }
}

export default LogIn;

// Greg is below, delete once all set above
// import React from 'react';
// import { Form, Input, Button } from 'reactstrap'
// import axios from 'axios';

// class Login extends React.Component {
//     state = {
//         username: '',
//         password: ''
//     }

//     handleChange = e => {
//         console.log('handle change');
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleLogin = e => {
//         console.log('inside handleLogin')
//         e.preventDefault();
//         localStorage.setItem('user', this.state.username)
//         this.props.history.push('/friends')
//     }

//     render() {
//         return(
//         <div className='LoginContainer'>
//             <h3>Log In Here</h3>
//             <Form onSubmit={this.handleLogin}>
//                 <Input
//                     type="string"
//                     name="enter username"
//                     placeholder="enter username"
//                     onChange={this.handleChange}
//                     value={this.state.username}
//                     required
//                 />
//                 <Input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={this.handleChange}
//                     value={this.state.password}
//                     required
//                 />
//                 <Button type="submit">Login</Button>
//             </Form>
//         </div>
//         )
//     }
// }

// export default Login;
