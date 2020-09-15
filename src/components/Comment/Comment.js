import React, { useEffect, useState } from 'react';
import './Comment.css';
const Comment = (props) => {
    const [profilePic, setProfilePic] =  useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => setProfilePic(data.results[0].picture.medium))
    }, [])
    console.log(props.comment);
    const {email,body} = props.comment;
    return (
        <div className="comment">
            <div className="profile">
                <img src={profilePic} alt="" srcset=""/>
            </div>
            <div className="description">
                <h3>{email}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Comment;