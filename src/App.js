import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login.js';

const routes=(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
    </Switch>
    </BrowserRouter>
);

export default routes;
