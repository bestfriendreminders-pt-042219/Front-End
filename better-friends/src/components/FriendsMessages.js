// Shows a single message

import React from 'react';

const FriendsMessages = props => {

    return (
        <div>
            <h2>You're all set to be a better friend!</h2>
                <div>
                    <p>Friend: {props.friend.recipientName}</p>
                    <p>Message: {props.friend.message}</p>
                    <p>Sending Date: {props.friend.sendDate}</p>
                    <button onClick = {() => props.delete(props.friend.id)}>Delete</button>
                    <button onClick = {() => props.put(props.friend.id)}>Update</button>

                </div>
        </div>
    )
}

export default FriendsMessages;