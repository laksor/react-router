import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetails = (props) => {
   const {postId} = useParams();
   const [post, setPost] = useState([]);
    useEffect( ()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [postId])
    
    return (
        <div>
            <h1>Post details {postId}</h1>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            
        </div>
    );
};

export default Postdetails;