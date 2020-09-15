import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import AllPost from './components/allPost/allPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import NoMatch from './components/NoMatch/NoMatch';
import SingleBlog from './components/SingleBlog/SingleBlog';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/allBlog">
            <AllPost />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/singleBlog/:id">
            <SingleBlog />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;
