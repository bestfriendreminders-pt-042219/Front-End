// Shows a single message

import React from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import blankDay from '../img/blank-day.png';


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
            img: ''
          });
        })
        .catch(function(res) {
          console.log(res.message);
        });
    }
  };

  

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  render() {
    return (
      // const dateToFormat = new Date('1976-04-19T12:59-0500');
      //       <Moment date={dateToFormat} />


      <MesagesContainer>
      {/* This jv function is for Updating/ Adding a new Message ELSE what to disaply to be mapped over
      in FriendsContainer*/}
        {this.state.updating ? (
          // If State is updating, then it goes into this submit Form
          <form onSubmit={e => this.initializeUpdate(e, this.state.id)}>
            
            <Label>Friends Event: {''}
            <Select 
                name="category"
                value={this.state.category}
                onChange={this.onChange}
                >
                <Option value="null">--</Option>
                <Option value="Wife's Birthday">Wife's Birthday</Option>
                <Option value="Husband's Birthday">Husband's Birthday</Option>
                <Option value="Birthday">Birthday</Option>
                <Option value="Anniversary">Anniversary</Option>
                <Option value="A Special Day">A Special Day</Option>
                <Option value="Text Notification">Text Notification</Option>
                <Option value="Baby Shower">Baby Shower</Option>
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
                    // format='MM/DD/YYYY'
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
          
          <TextContainer>
            <h4>
            {this.state.recipientName}
             
             <br></br>
            {this.state.category.slice(0,1).toUpperCase(this.state.category) + this.state.category.slice(1, this.state.category.length)}
            
            </h4>
            
            <Btn>
              <button onClick={() => this.setState({ updating: true })}>
              Edit
            </button>
            <button onClick={() => this.props.delete(this.props.friend.id)}>
              Delete
            </button>
            </Btn>
            {/* {this.state.category.slice(0,1).toUpperCase(this.state.category) + this.state.category.slice(1, this.state.category.length)} */}
            <p>{moment(this.state.sendDate).format('ddd MMM DD YYYY')}</p>
            <p>Message: {this.state.message}</p>
            
          </TextContainer>
        )}
      </MesagesContainer>
    );
  }
}

export default FriendsMessages;


const Select = styled.select `
margin: 10px auto;
`

const Option = styled.option `
`

const Label = styled.label `
display: flex;
`

const Form = styled.form `
margin: 50px;
`
const Input = styled.input `
margin: 10px auto;
border: 1px solid red;
`

const MesagesContainer = styled.div `
// border: 1px solid red;
background-image: url(${blankDay});
background-position-x: 50%;
background-position-y: 40%;
background-size: 150% 150%;
background-repeat: no-repeat;
width: 320px;
height: 320px;
margin: 10px;
border-radius: 10%;
`
const TextContainer = styled.div`
// border: 1px solid purple;
font-size: 20px;
padding-right: 5%;
padding-left: 5%;
word-break: break-all;
position: relative;
text-align: center;
// overflow: scroll;
// padding-top: 40px;
// margin: 10px;
`

const Btn = styled.form`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
button {
  border-radius: 50%;
  background-color: #532516;
  // opacity: .7;
  border-color: #975D41;
  color: #D4D4D4;

}
`






