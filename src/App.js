import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import WrappedNormalLoginForm from './component/Login';
import error from './component/error';
import WrappedRegisterForm from './component/Register';
import WrappedAboutForm from './component/About';
import WrappedForgetPasswordForm from'./component/ForgetPassword';
import WrappedMyCVForm from './component/Mycv';

const routes=(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WrappedNormalLoginForm} exact/>
         <Route path="/register" component={WrappedRegisterForm} />
         <Route path="/forgetpassword" component={WrappedForgetPasswordForm}/>
         <Route path="/about" component={WrappedAboutForm}/>
         <Route path="/mycv" component={WrappedMyCVForm}/>
         <Route path="/signalment" component={WrappedSignalmentForm}/>
         <Route component={error}/>

      </Switch>
    </BrowserRouter>
);


export default routes;
