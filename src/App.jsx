import React from 'react';
// import './App.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


// actions
import { fetchPosts } from './actions/posts';

//Components 
import PostList from './components/PostList';
import Navigation from './components/Navigation';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <Navigation></Navigation>
        <div className="container px-4 px-lg-5">
          <PostList posts={posts}></PostList>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

App.PropTypes={
  posts:PropTypes.array.isRequired
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;