import React from 'react';
import {browserHistory  } from 'react-dom';
import {Switch,HashRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login.js';
import error from './component/error.js';
import WrappedRegisterForm from './component/Register.js';
import WrappedAboutForm from './component/About.js'
import WrappedForgetPasswordForm from'./component/ForgetPassword.js';
import WrappedHomePage from './component/HomePage.js';
import WrappedCalendar from './component/Calendar.js';


const routes=(
    <HashRouter>
      <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
         <Route path="/register" component={WrappedRegisterForm} />
         <Route path="/forgetpassword" component={WrappedForgetPasswordForm}/>
         <Route path="/about" component={WrappedAboutForm}/>
         <Route path="/homepage" component={WrappedHomePage} />
         <Route path="/calendar" component={WrappedCalendar}/>
         <Route component={error}/>
      </Switch>
    </HashRouter>
);


export default routes;
