import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login.js';
import error from './component/error.js';


const routes=(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
        <Route component={error}/>
    </Switch>
    </BrowserRouter>
);

export default routes;
