import React from 'react';
// import './App.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';


// actions
import { fetchPosts } from './actions/posts';

//Components 
import Home from './components/Home';
import Page404 from './components/Page404';
import Login from './components/Login';
import Navigation from './components/Navigation';
import SignUp from './components/SignUp';
import { getUser } from './helpers/utils';
import { authenticateUser } from './actions/auth';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const user = getUser();
    
    if(user){
      const {user_id:id, email, first_name, last_name } = user;
      this.props.dispatch(authenticateUser({id, email, first_name, last_name }))
    } 

  }

  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <div className="container px-4 px-lg-5">
            <Routes>
              <Route 
                path="/" 
                element={<Home posts={posts}/>}
              />
              <Route 
                path="*" 
                element={<Page404 />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/sign-up" 
                element={<SignUp />}
              />
            </Routes>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

App.PropTypes = {
  posts: PropTypes.array.isRequired
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;