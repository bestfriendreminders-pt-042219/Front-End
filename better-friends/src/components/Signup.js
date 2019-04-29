import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import axios from 'axios';



class Signup extends React.Component {
    state = {
        user: {
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
        console.log(this.state.user)
        axios
        .post('https://best-friend-reminders.herokuapp.com/api/register', this.state.user)
        .then(res => {
            localStorage.setItem({ 'token': res.data.token })
            this.history.push('/friends')
        })
        .catch(err => {console.log(err)})
    }

    render() {
        return(
            <div className='SignupContainer'>
                <h3>Create an account</h3>
                    <Form onSubmit={this.signup}>
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
                        <Button type='submit'>Signup</Button>
                    </Form>
            </div>
        )
    }
}



export default Signup;