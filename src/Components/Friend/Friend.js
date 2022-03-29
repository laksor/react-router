import React from 'react';
import './Friend.css';

const Friend = (props) => {
    const {name} = props.friend;
    return (
        <div>
            <h3>name: {name}</h3>
        </div>
    );
};

export default Friend;