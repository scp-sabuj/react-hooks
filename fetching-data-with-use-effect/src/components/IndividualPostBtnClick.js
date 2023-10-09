import React, { useEffect, useState } from 'react'
import axios from 'axios'

function IndividualPostBtnClick() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idBtnClick, setIdBtnClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idBtnClick]);

    const handleClick = () => {
        setIdBtnClick(id);
    }


    return (
        <div>
            <div>
                <h1>Get Individual Post On Button Click</h1>
                <div>
                    <input type='text' value={id} onChange={e => setId(e.target.value)} />
                    <button onClick={handleClick}>Fetch Data</button>
                </div>
                <div><b>Post Title: </b>{post.title}</div>
            </div>
        </div>
    )
}

export default IndividualPostBtnClick