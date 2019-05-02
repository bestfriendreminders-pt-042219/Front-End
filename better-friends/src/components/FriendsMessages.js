// Shows a single message

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


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
        <MesagesContainer>
      <div>
      {/* <Label>{''}
      {this.state.recipientName}
      </Label> */}
        {/* <h2>Friends Messages</h2> */}

        {this.state.updating ? (
          <form onSubmit={e => this.initializeUpdate(e, this.state.id)}>
            
            <Label>Friends Event: {''}
            <Select 
                name="category"
                value={this.state.category}
                onChange={this.onChange}
                >
                <Option value="null">--</Option>
                <Option value="Anniversary">Anniversary</Option>
                <Option value="birthday">Birthday</Option>
                <Option value="retirement">Retirement</Option>
                <Option value="babyShower">Baby Shower</Option>
            </Select>
            </Label>

            <Label>Friend: {''}
            <Input
              type="text"
              placeholder="Recipient Name"
              name="recipientName"
              onChange={this.onChange}
              value={this.state.recipientName}
            />
            </Label>

            <Label>When To Send: {''}
                <Input
                    type="date"
                    name="sendDate"
                    placeholder="Date"
                    onChange={this.onChange}
                    value={this.state.sendDate}
                    required="required"
                />
            </Label>

            <Label>Message For Friend: {''}
            <Input
              type="text"
              placeholder="message"
              name="message"
              onChange={this.onChange}
              value={this.state.message}
            />
            </Label>

            <Label>Friends Email: {''}
            <Input
            type="text"
            name="Friends Email"
            placeholder="email"
            onChange={this.onChange}
            value={this.state.recipientEmail}
            required="required"
            />
            </Label>

            <button>Update</button>
          </form>
        ) : (
          <div>
            <p>Friend: {this.state.recipientName}</p>
            <p>Event: {this.state.category}</p>
            <p>Message: {this.state.message}</p>
            <p>Sending on: {this.state.sendDate}</p>
            <button onClick={() => this.setState({ updating: true })}>
              Edit
            </button>
            <button onClick={() => this.props.delete(this.props.friend.id)}>
            {/* <button onClick={this.props.deleteReminder}> */}

              Delete
            </button>
            {/* <button class="edit"onClick={() => this.setState({ editing: true })}>Edit</button> */}
          </div>
        )}
      </div>
      </MesagesContainer>
    );
  }
}


const MesagesContainer = styled.div `
border: 1px solid red;
`
const Form = styled.form `
margin: 50px;
`
const Input = styled.input `
margin: 10px auto;
border: 1px solid red;
`





export default FriendsMessages;




const Select = styled.select `
margin: 10px auto;
`

const Option = styled.option `
`

const Label = styled.label `
display: flex;
`