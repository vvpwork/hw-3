import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//* component */
import Header from './components/Header';

//* pages*/
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuAdd from './pages/MenuAdd';
import MenuDetaile from './pages/MenuDetaile';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu/add" component={MenuAdd} />
          <Route path="/menu/:id" component={MenuDetaile} />
          <Route path="/menu" component={Menu} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
