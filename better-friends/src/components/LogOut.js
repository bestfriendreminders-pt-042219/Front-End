import React from 'react'
import { Link } from 'react-router-dom'



class LogOut extends React.Component {

    handleLogOut = e => {
        console.log('logout')
        e.preventDefault()
        localStorage.clear()
        sessionStorage.clear()
        
    }

    render() {
        return (
            <div>
                <Link to='/login'>
                    <button onClick={this.handleLogOut}>Log Out</button>
                </Link>
            </div>
        )
    }
}

export default LogOut