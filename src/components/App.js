import React, { Component } from 'react';
import logo from '../logo.svg';
import LinkList from './LinkList'
import './../styles/App.css';
import CreateLinks from './CreateLinks';
import Header from './Header'
import Login from './Login'
import Search from './Search'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLinks} />
            <Route exact path='/search' component={Search}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;

