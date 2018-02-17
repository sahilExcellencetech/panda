import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import {Switch,HashRouter,Route,Link} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login';
import error from './component/error';
import WrappedRegisterForm from './component/Register';
import WrappedAboutForm from './component/About'
import WrappedForgetPasswordForm from './component/ForgetPassword';
import WrappedSignalmentForm from './component/Signalment'
const routes=(
    <HashRouter>
      <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
         <Route path="/register" component={WrappedRegisterForm} />
         <Route path="/forgetpassword" component={WrappedForgetPasswordForm}/>
         <Route path="/about" component={WrappedAboutForm}/>
         <Route path="/signalment" component={WrappedSignalmentForm}/>
         <Route component={error}/>
      </Switch>
    </HashRouter>
);


export default routes;
