import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';

import App from './components/App/App';
import Home from "./components/Home/Home";
import Employees from "./components/Employees/Employees";

ReactDOM.render(
    <Router>
        <App/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/employees" component={Employees}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
