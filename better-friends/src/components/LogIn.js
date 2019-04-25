import React, {Component} from 'react'
import axios from 'axios'

class LogIn extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
            
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name] : event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault()

        axios
            .post( 'https://best-friend-reminders.herokuapp.com/api/login', this.state.credentials)
            
            .then( res => {
                this.props.history.push('.protectedRoute')
                localStorage.setItem('token', res.token)
            })
            
            .catch( err => {
                console.log(err)
            })
    }


    render() {
        return (
            <>
                <h1>Log In</h1>

                <form onSubmit={this.login}>
                    <input
                        type='string'
                        name='username'
                        placeholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    /> 
                 
                    <button> Log In </button>
                </form>
            </>
        )
    }
    
}

export default LogIn