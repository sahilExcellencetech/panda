import React from 'react';
import {browserHistory  } from 'react-dom';
import {Switch,HashRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login';
import error from './component/error';
import WrappedRegisterForm from './component/Register';
import WrappedAboutForm from './component/About'
import WrappedForgetPasswordForm from'./component/ForgetPassword';
import HomePage from './component/HomePage';
import Calendar from './component/Calendar';
import Profile from './component/Profile';


const routes=(
    <HashRouter>
      <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
         <Route path="/register" component={WrappedRegisterForm} />
         <Route path="/forgetpassword" component={WrappedForgetPasswordForm}/>
         <Route path="/about" component={WrappedAboutForm}/>
         <Route path="/homepage" component={HomePage} />
         <Route path="/calendar" component={Calendar}/>
         <Route path="/profile" component={Profile}/>
         <Route component={error}/>
      </Switch>
    </HashRouter>
);
export default routes;
