import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,BrowserRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login.js';
import error from './component/error.js';
import WrappedRegisterForm from './component/Register.js';
import WrappedAboutForm from './component/About.js'
import WrappedForgetPasswordForm from'./component/ForgetPassword.js';
import WrappedMyCVForm from './component/Mycv.js';

const routes=(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
         <Route path="/register" component={WrappedRegisterForm} />
         <Route path="/forgetpassword" component={WrappedForgetPasswordForm}/>
         <Route path="/about" component={WrappedAboutForm}/>
         <Route path="/mycv" component={WrappedMyCVForm}/>
         <Route component={error}/>

      </Switch>
    </BrowserRouter>
);


export default routes;
