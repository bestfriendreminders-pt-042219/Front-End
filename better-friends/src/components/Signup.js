import React from 'react';
import { Form, Input, Button } from 'reactstrap';


class Signup extends React.Component {
    state = {
        user: {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        console.log('Changing');
        e.persist();
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: e.target.value
            }
        }));
    }

    signup = e => {
        console.log('Signing up')
        e.preventDefault();
        localStorage.setItem('user')
    }

    render() {
        return(
            <div className='SignupContainer'>
                <h3>SignUp</h3>
                    <Form>
                        <Input 
                            type="string"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.user.name}
                            required
                        />
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.user.email}
                            required
                        />
                        <Input 
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={this.handleChange}
                            value={this.state.user.phone}
                            required
                        />
                        <Input 
                            type="string"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                            value={this.state.user.username}
                            required
                        />
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
                            required
                        />
                        <Button>Signup</Button>
                    </Form>
            </div>
        )
    }
}



export default Signup;