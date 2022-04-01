import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [friendId])

    return (
        <div>
            <h1>Details Bondhu {friendId}</h1>
            <h1>name : {friend.name}</h1>
            <h1>email : {friend.email}</h1>
            <h1>Address : {friend.address?.city} </h1>
            <h2>Phone : {friend.phone} </h2>
        </div>
    );
};

export default FriendDetails;