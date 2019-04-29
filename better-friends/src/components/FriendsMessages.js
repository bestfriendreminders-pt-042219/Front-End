import React from 'react';

const FriendsMessages = props => {

    return (
        <div>
            <h2>You're all set to be a better friend!</h2>
                <div>
                    <p>Friend: {props.message.person}</p>
                    <p>Message: {props.message.message}</p>
                    <p>Sending Date: {props.message.date}</p>
                </div>
        </div>
    )
}

export default FriendsMessages;