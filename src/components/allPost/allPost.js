import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';
const AllPost = () => {
    const [singleBlog, setBlog] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setBlog(data.slice(0,15)));
        // I've just used first 15 posts from 100 posts;
    },[])
    return (
        <Container style={{marginTop: '20px'}}>
            {
                singleBlog.map(sblog => <Post key={sblog.id} blog={sblog}></Post>)
            }
            
        </Container>
    );
};

export default AllPost;