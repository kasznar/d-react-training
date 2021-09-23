import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {getComments, Comment} from './api/comments';
import  {Link, Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';


function App() {
  const [comments, setCommnets] = useState<Comment[]>([]);

  useEffect(()=>{
    getComments().then((data)=>{
      setCommnets(data);
    })
  },[])

  return (
    <div>
      <Router>
        <Link to="/product-list">List</Link>
        <Link to="/product">Product</Link>
        <Switch>
          <Route path="/product-list">
            list
          </Route>
          <Route path="/product">
            page
            <pre>{JSON.stringify(comments, null, 4)}</pre>
          </Route>
          <Redirect to="/product-list" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
