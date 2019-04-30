// PURPOSE: Display Messages, update, delete

import React from 'react';
import FriendsMessages from './FriendsMessages';
import axios from 'axios';

class FriendsContainer extends React.Component {
    state = {
        friends: []
    }

    componentDidMount = () => {
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

      componentDidUpdate = () => {

          this.getReminders()
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
          .then(res =>this.props.history('/Reminders'))
          .catch(err => console.log(err));
        }
      }



render () {

    return(
        <div>
            {this.state.friends.map((friend) => {
                return (
                    <div key={friend.id}>
                        <FriendsMessages friend={friend} delete={this.deleteReminder}/>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default FriendsContainer;
