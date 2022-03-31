import React from 'react';
import { useParams } from 'react-router-dom';
import Friend from '../Friend/Friend';

const FriendDetails = () => {
    const {friendId} = useParams();
    return (
        <div>
            <h1>Details bondhu {friendId}</h1>
        </div>
    );
};

export default FriendDetails;