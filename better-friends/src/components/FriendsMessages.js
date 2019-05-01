// Shows a single message

import React from 'react';
import axios from 'axios';

class FriendsMessages extends React.Component {
  state = {
    updating: false,
    recipientName: '',
    message: '',
    sendDate: '',
    category: '',
    recipientEmail: '',
  };
  componentDidMount() {
    console.log(this.props);
    for (let key in this.props.friend) {
      this.setState({ [key]: this.props.friend[key] });
    }
  }
  initializeUpdate = (e, id) => {
    e.preventDefault();
    // e.preventDefault(); remember there is no event to prevent here because we're not passing this function
    const {
      recipientName,
      message,
      sendDate,
      category,
      recipientEmail,
    } = this.state;
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: {
        authorization: token,
      },
    };
    if (!token) this.props.history.push('/login');
    else {
      const info = {
        recipientName,
        message,
        sendDate,
        category,
        recipientEmail,
      };
      for (let key in info) {
        if (!info[key]) {
          console.log('Missing a key');
          return;
        }
      }
      axios
        .put(
          `https://best-friend-reminders.herokuapp.com/api/reminders/${id}`,
          info,
          requestOptions
        )
        .then(res =>
          axios.get(
            `https://best-friend-reminders.herokuapp.com/api/reminders/${id}`,
            requestOptions
          )
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
        .catch(function(res) {
          console.log(res.message);
          // res();
        });
    }
  };

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    return (
      <div>
        <h2>Friends Messages</h2>
        {this.state.updating ? (
          <form onSubmit={e => this.initializeUpdate(e, this.state.id)}>
            <input
              type="text"
              placeholder="Recipient Name"
              name="recipientName"
              onChange={this.onChange}
              value={this.state.recipientName}
            />
            <input
              type="text"
              placeholder="message"
              name="message"
              onChange={this.onChange}
              value={this.state.message}
            />
            <input
              type="text"
              placeholder="category"
              name="category"
              onChange={this.onChange}
              value={this.state.category}
            />
            <button>Update</button>
          </form>
        ) : (
          <div>
            <p>Friend: {this.state.recipientName}</p>
            <p>Message: {this.state.message}</p>
            <p>Sending Date: {this.state.sendDate}</p>
            <button onClick={() => this.setState({ updating: true })}>
              Edit
            </button>
            <button onClick={() => this.props.delete(this.props.friend.id)}>
              Delete
            </button>
            {/* <button class="edit"onClick={() => this.setState({ editing: true })}>Edit</button> */}
          </div>
        )}
      </div>
    );
  }
}

export default FriendsMessages;
