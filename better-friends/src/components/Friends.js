import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FriendsContainer from './FriendsContainer';

class Friends extends React.Component {
    state = {
        eventMessage: [{
        person: '',
        message: '',
        date: '',
        sent: false
    }]
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
        const newMessage = {
            person: this.state.person,
            message: this.state.message,
            date: this.state.date,
            sent: this.state.sent
        }
        this.setState({
            eventMessage: [...this.state.eventMessage, newMessage],
            person: '',
            message: '',
            date: '',
            sent: false
        })
        this.props.history.push('/protected')
    }


// needs CDM to GET (api/reminders) with a array  of reminders to store in state in render display in state
// separate this file into a messageForm component to display if you want to create a new message for a friend

    render() {
        return (
            <FriendsSection>
                <h1>Friends</h1>
                    <h3>Add Friend Event</h3>
                    <Form onSubmit={this.addEventMessage}>
                        <Label>Event Type: {''}
                            <Select name="category">
                                <Option value="null">--</Option>
                                <Option value="anniversary">Anniversary</Option>
                                <Option value="birthday">Birthday</Option>
                                <Option value="retirement">Retirement</Option>
                                <Option value="babyShower">Baby Shower</Option>

                            </Select>
                        </Label>
                        <Label>Name: {''}
                            <Input 
                                type="string"
                                name="person"
                                placeholder="Name"
                                onChange={this.handleChange}
                                value={this.state.person}
                            />
                        </Label>
                        <Label>Send Date: {''}
                            <Input
                                type="date"
                                name="date"
                                placeholder="Date"
                                onChange={this.handleChange}
                                value={this.state.date}
                            />
                        </Label>
                        <Label>Message: {''}
                            <Textarea 
                                type="string"
                                name="message"
                                maxLength="250"
                                rows="4"
                                columns="10"
                                placeholder="Enter message..."
                                onChange={this.handleChange}
                                value={this.state.message}
                            />
                        </Label>
                        <Button type="submit">Submit</Button>
                    </Form>
                <FriendsContainer message={this.state.eventMessage}/>
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

// recipientName	String	Name of the person the message will be sent to.
// recipientEmail	String	Email of the message recipient.
// message	String	The text of the message.
// category	String	The category that the reminder belongs to.
// sendDate	date	The date the message is scheduled to be sent.

// WHEN DONE - Should get status of 201 with the ID of the reminder just created
// 