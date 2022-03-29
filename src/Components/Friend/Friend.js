import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();

    const showFriendDetails = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h3>name: {name}</h3>
            <button onClick={showFriendDetails}>{username}: {id}</button>
        </div>
    );
};

export default Friend;