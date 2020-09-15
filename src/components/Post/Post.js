import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";
import './Post.css';
const useStyles = makeStyles({
  root: {
    padding: 20,
    marginBottom: 40
  },
  media: {
    height: 150,
    width: 130
  }
});

export default function Post(props) {
  const classes = useStyles();
  const {id,title,body} = props.blog;
  return (
    <Card className={classes.root}>
      <CardActionArea style={{display: 'flex'}}>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              <Link to={`/singleBlog/${id}`} className="postTitle">{title}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
            <Link to={`/singleBlog/${id}`} className="continue-link">Continue Reading →</Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
