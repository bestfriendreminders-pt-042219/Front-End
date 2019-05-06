import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';




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
                    <button 
                    onClick={this.handleLogOut}
                    style={{
                        background: 'transparent',
                        color: '#D4D4D4',
                        borderRadius: '10%'
                    }}
                    
                    >Log Out</button>
                </Link>
            </div>
        )
    }
}

export default LogOut