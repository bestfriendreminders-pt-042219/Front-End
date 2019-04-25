import React, {Component} from 'react'
import axios from 'axios'

class LogIn extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <>
                <h1>Log In</h1>

                <form>
                    <input
                        type='string'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                
                    <input 
                        type='string'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    /> 
                 
                    <button> Log In </button>
                </form>
            </>
        )
    }
    
}

export default LogIn