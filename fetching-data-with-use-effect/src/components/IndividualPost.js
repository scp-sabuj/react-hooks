import React, { useEffect, useState } from 'react'
import axios from 'axios';

function IndividualPost() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id]);

    return (
        <div>
            <h1>Get Individual Post</h1>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <div><b>Post Title: </b>{post.title}</div>
        </div>
    )
}

export default IndividualPost