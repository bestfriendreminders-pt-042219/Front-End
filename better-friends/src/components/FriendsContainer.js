// PURPOSE: Display Messages by mapping over FriendsMessages, update, delete

import React from 'react';

import FriendsMessages from './FriendsMessages';
import axios from 'axios';
import styled from 'styled-components';

class FriendsContainer extends React.Component {
    state = {
        friends: []
    }

    componentDidMount = () => {
    console.log(this.props)
    this.getReminders();
    }

    getReminders = () => {
        const token = localStorage.getItem("token")
        const requestOptions = {
            headers: {
            authorization: token
            }
        }
        if (!token) this.props.history.push("/login")
            else {
                axios
                .get('https://best-friend-reminders.herokuapp.com/api/reminders/', requestOptions)
                .then(res => this.setState({ friends: res.data }))
                .catch(err => console.log(err));
            }
    }

    deleteReminder = (id) => {
        const token = localStorage.getItem("token")
        const requestOptions = {
            headers: {
            authorization: token
            }
        }
        if (!token) this.props.history.push("/login")
        else {
            axios
            .delete(`https://best-friend-reminders.herokuapp.com/api/reminders/${id}`, requestOptions)
            .then(res =>
                axios
                .get(`https://best-friend-reminders.herokuapp.com/api/reminders/`, requestOptions)
            )
            .then(final => {
                console.log(final.data);
                this.setState({
                    updating: false,
                    recipientName: final.data.recipientName,
                    message: final.data.message,
                    sendDate: final.data.sendDate,
                    category: final.data.category,
                    recipientEmail: final.data.recipientEmail,
                });
                })
            .catch(err => console.log(err));
        }
    }

    componentDidUpdate = (prevProps) => {
        const token = localStorage.getItem("token")
        const requestOptions = {
            headers: {
            authorization: token
            }
        }
        if (!token) this.props.history.push("/login")
            else {
                axios
                .get('https://best-friend-reminders.herokuapp.com/api/reminders/', requestOptions)
                .then(res => this.setState({ friends: res.data }))
                .catch(err => console.log(err));
            }
    }

    


render () {
    return(
        <MessageContainer>
            {this.state.friends.map((friend) => {
                return (
                    <div key={friend.id}>
                        <FriendsMessages 
                        friend={friend} 
                        delete={this.deleteReminder}
                        put={this.props.update}
                        />
                    </div>
                )
            })}
        </MessageContainer>
        )
    }
}

export default FriendsContainer;

const MessageContainer = styled.div `
// border: 1px solid green;
box-sizing: border-box
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
width: 100%;
height: auto;
@media (max-width: 900px) {
    flex-wrap: wrap;
}
@media (max-width: 500px) {
      flex-direction: column;
    height: auto;

  }
`

