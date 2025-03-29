import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={UserList} />
        <Route path="/create-user" component={CreateUser} />
      </Switch>
    </Router>
  );
};

export default App;
