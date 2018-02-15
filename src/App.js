import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login.js';
import WrappedForgetPasswordForm from'./component/ForgetPassword.js';

const routes=(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
        <Route path="/forgetpassword"component={WrappedForgetPasswordForm}/>
    </Switch>
    </BrowserRouter>
);

export default routes;
