import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './SingleBlog.css';
import Comment from '../Comment/Comment';
const useStyles = makeStyles({
    root: {
      // maxWidth: 345,
      padding: 20,
      marginBottom: 40
    },
  });
const SingleBlog = () => {
    const classes = useStyles();
    const [article, setArticle] = useState([]);
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setArticle(data))
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [])
    return (
        <Container style={{marginBottom: '20px'}}>
            <Card className={classes.root}>
                <CardActionArea style={{display: 'block'}}>
                    <CardMedia
                    className="blogImage"
                    image="https://source.unsplash.com/random"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <p className="postTitle">{article.title}</p>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {article.body}{article.body}{article.body}{article.body}{article.body}{article.body}{article.body}{article.body}{article.body}{article.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Container style={{padding: '0 100px'}}>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
                }
            </Container>
        </Container>
    );
};

export default SingleBlog;