import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FriendsMessages from './FriendsMessages';

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
            <div className='friendsContainer'>
                <h1>Friends</h1>
                    <h3>Add Friend Event</h3>
                    <Form onSubmit={this.addEventMessage}>
                        <Label>Event Type: {''}
                            <Select name="Choose an event reminder">
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
                <FriendsMessages message={this.state.eventMessage}/>
            </div>
        )
    }
}

export default withRouter(Friends);


// export friends wrapped in the HOC