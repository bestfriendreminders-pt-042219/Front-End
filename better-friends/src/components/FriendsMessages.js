import React from 'react';

const FriendsMessages = props => {

    return (
        <div>
            <h2>You're all set to be a better friend!</h2>
                <div>
                    <p>Friend: {props.friend.recipient}</p>
                    <p>Message: {props.friend.message}</p>
                    <p>Sending Date: {props.friend.sendDate}</p>
                </div>
        </div>
    )
}

export default FriendsMessages;