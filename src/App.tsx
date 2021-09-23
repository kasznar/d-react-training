import React, {useState, useEffect} from 'react';
import {getComments, Comment} from './api/comments';
import  {Link, Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {Button} from '@mui/material'
import {Header} from './layout/Header';


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
        <Header/>
        <Link to="/product-list">List</Link>
        <Link to="/product">Product</Link>
        <Button>materialos gomb</Button>
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
