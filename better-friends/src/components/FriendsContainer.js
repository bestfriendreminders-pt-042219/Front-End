// PURPOSE: Display Messages, update, delete

import React from 'react';
import FriendsMessages from './FriendsMessages';
import axios from 'axios';

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

      componentDidUpdate = (prevProps) => {
        if (this.props.id !== prevProps.id) {
            // this.fetchData(this.props.id);
            this.getReminders()
          }
        //   if (prevProps !== this.props.messages) {
        //     return this.state.messages
        // }
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

      updateReminder = (id, info) => {
        const token = localStorage.getItem("token")
        const requestOptions = {
          headers: {
            authorization: token
          }
        }
        if (!token) this.props.history.push("/login")
        else {
            console.log(token)
            const info = this.state
            // console.log(requestOptions)
          axios
          .put(`https://best-friend-reminders.herokuapp.com/api/reminder/${id}`, info, requestOptions)
        //   .then(res =>this.props.history('/Reminders'))
        //   .then(res => this.setState({ friends: res.data }))
          .then(res =>  console.log(res.data))

        //   .catch(err => console.log(err));
        .catch(function (res) {
            console.log(res);
            // res();
          });
        }
        // console.log(requestOptions)
        // console.log(id)
        // console.log(this.state)

     

      }

      



render () {

    return(
        <div>
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
        </div>
        )
    }
}

export default FriendsContainer;
