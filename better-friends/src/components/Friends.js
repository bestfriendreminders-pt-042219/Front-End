// Add Message Form

import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


//import FriendsContainer from './FriendsContainer';

class Friends extends React.Component {
    state = {
        recipientName: '',
        message: '',
        sendDate: '',
        category: '',
        recipientEmail: ''
    }

    handleChange = e => {
        console.log('Changing');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addEventMessage = e => {
        console.log('New event add', this.state);
        e.preventDefault();
        const token = localStorage.getItem("token")
        const requestOptions = {
          headers: {
            authorization: token
          }
        }
        if (!token) this.props.history.push("/login")
        else {
            console.log(this.state)
          axios
          .post('https://best-friend-reminders.herokuapp.com/api/reminders/',this.state, requestOptions)
          .then(res => console.log(res.data))
          .catch(err => console.log(err.message));
          this.props.history.push('/Reminders')
        }
    }

    // a messageForm component to display if you want to create a new message for a friend

    render() {
        return (
            <FriendsSection>
                <h1>Add Friend Event</h1>
                    {/* <h3>Add Friend Event</h3> */}
                    <Form onSubmit={this.addEventMessage}>
                   
                        <Label>Friends Event: {''}
                            <Select 
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                            >
                                <Option value="null">--</Option>
                                <Option value="anniversary">Anniversary</Option>
                                <Option value="birthday">Birthday</Option>
                                <Option value="retirement">Retirement</Option>
                                <Option value="babyShower">Baby Shower</Option>

                            </Select>
                        </Label>
                        <Label>Friends Name: {''}
                            <Input 
                                type="text"
                                name="recipientName"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.recipientName}
                                required="required"

                            />
                        </Label>
                        <Label>When To Send: {''}
                            <Input
                                type="date"
                                name="sendDate"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.sendDate}
                                required="required"
                            />
                        </Label>
                        <Label>Message For Friend: {''}
                            <Textarea 
                                type="text"
                                name="message"
                                maxLength="250"
                                rows="4"
                                columns="10"
                                placeholder="Enter message..."
                                onChange={this.handleChange}
                                value={this.state.message}
                                required="required"

                            />
                        </Label>
                        <Label>Friends Email: {''}
                            <Input
                                type="text"
                                name="recipientEmail"
                                placeholder="email"
                                onChange={this.handleChange}
                                value={this.state.recipientEmail}
                                required="required"

                            />
                        </Label>
                        <Button type="submit">Submit</Button>
                        
                    </Form>
                
            </FriendsSection>
        )
    }
}

export default withRouter(Friends);

const FriendsSection = styled.div `
`
const Form = styled.form `
margin: 50px;
`
const Label = styled.label `
display: flex;
`

const Select = styled.select `
margin: 10px auto;
`

const Option = styled.option `
`

const Textarea = styled.textarea `
    margin: 10px auto;
    `

const Input = styled.input `
margin: 10px auto;
`

// export friends wrapped in the HOC

// recipientName	String	Name of the recipientName the message will be sent to.
// recipientEmail	String	Email of the message recipient.
// message	String	The text of the message.
// category	String	The category that the reminder belongs to.
// sendDate	date	The date the message is scheduled to be sent.

// WHEN DONE - Should get status of 201 with the ID of the reminder just created
// 