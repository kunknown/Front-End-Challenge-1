import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import PostsContainer from './containers/PostsContainer';
import PostDetailsContainer from './containers/PostDetailsContainer';
import Navbar from './components/Navbar';
import history from './config/history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostsContainer} />
          <Route path="/posts/:postId" component={PostDetailsContainer}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
