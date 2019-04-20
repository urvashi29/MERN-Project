import React, { Component } from 'react';
import Home from './Allpages/Home'
import Main from './mainpages/Main'
import About from './Allpages/About'
import Navigate from './Allpages/Navigate';
import Dashboard from './mainpages/Dashboard'
import { Route, BrowserRouter } from 'react-router-dom'
import Student from './Allpages/Student'
import SignUp from './Allpages/Signup'
import Location from './mainpages/Location'
import Search from './mainpages/Search'
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* navigate */}
          <Navigate />
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/notification' component={Main} />
          <Route path='/profile' component={Main} />
          <Route path='/studentlogin' component={Student} />
          <Route path='/dashboard' component={Main} />
          <Route path='/location' component={Location} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/homepage' component={Main} />
          <Route exact path='/homepage' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/search' component={Main} />
          <Route path='/aboutpage' component={Main} />
          <Route path='/aboutpage' component={About} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/location' component={Main} />
        </BrowserRouter>
      </div>
    );
  }
}
