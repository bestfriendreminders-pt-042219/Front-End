import React from 'react';
import { Form, Input, Button } from 'reactstrap'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = e => {
        console.log('handle change');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogin = e => {
        console.log('inside handleLogin')
        e.preventDefault();
        localStorage.setItem('user', this.state.username)
        this.props.history.push('/friends')
    }

    render() {
        return(
        <div className='LoginContainer'>
            <h3>Log In Here</h3>
            <Form onSubmit={this.handleLogin}>
                <Input 
                    type="string"
                    name="enter username"
                    placeholder="enter username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    required
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    required
                />
                <Button type="submit">Login</Button>
            </Form>
        </div>
        )
    }
}



export default Login;