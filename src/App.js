import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsContainer from './containers/PostsContainer';
import PostDetailsContainer from './containers/PostDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PostsContainer} />
          <Route path="/posts/:postId" component={PostDetailsContainer}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
