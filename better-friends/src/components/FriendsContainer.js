// PURPOSE: Display Messages, update, delete

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
        // console.log('componentDidUpdate');
        // if (this.props.id !== prevProps.id) {
        //     this.getReminders()
        // }
        // return;
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
display: flex;
justify-content: space-evenly;
align-items: center;
border: 1px solid green;
width: 100%;
`