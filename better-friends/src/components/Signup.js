import React from 'react';
import { Form, Input, Button } from 'reactstrap';
import axios from 'axios';



class Signup extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            name: '',
            email: '',
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

    handlRegister = e => {
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
            <div className='RegisterContainer'>
                <h3>Create an account</h3>
                    <Form onSubmit={this.handlRegister}>
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
                        <Input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            value={this.state.user.password}
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
                        <Button type='submit'>Register</Button>
                    </Form>
            </div>
        )
    }
}



export default Signup;
// changed from signup to register to stay in line with backend