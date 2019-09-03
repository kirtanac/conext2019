import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';
import App from './App';
import About from './about';
import Companies from './companies';
import Contact from './contact';
import FAQs from './faqs';
import Registration from './registration';
import Notfound from './notfound';
import NavigationBar from './navigationbar';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <NavigationBar/>

      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/companies" component={Companies} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={FAQs} />
        <Route exact path="/registration" component={Registration} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
