import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  menuOptions: {
    display: 'flex',
  },
  socialOptions: {
    display: 'flex'
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  return (
    <Container>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">ZR's Blog</Link>
          </Typography>
          <div className={classes.headerOptions}>
            <div  className={classes.menuOptions}>
              <MenuItem style={{marginLeft: '2em'}}><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/allBlog">All Blog</Link></MenuItem>
              <MenuItem><Link to="/contact">Contact</Link></MenuItem>
              <MenuItem><Link to="/about">About</Link></MenuItem>
            </div>
            <div className={classes.socialOptions}>
              <MenuItem><Link to={{pathname: "https://www.facebook.com"}} target="_blank"><FontAwesomeIcon icon={faFacebook} /></Link></MenuItem>
              <MenuItem><Link to={{pathname: "https://www.twitter.com"}} target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link></MenuItem>
              <MenuItem><Link to={{pathname: "https://youtube.com"}} target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link></MenuItem>
              <MenuItem><Link to={{pathname: "https://instagram.com"}} target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></MenuItem>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </Container>
  );
}
