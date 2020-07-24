import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';

import App from './components/App/App';
import Home from "./components/Home/Home";
import EmployeesPage from "./components/Employees/EmployeesPage";

ReactDOM.render(
    <Router>
        <App/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/employees" component={EmployeesPage}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
