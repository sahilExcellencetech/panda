
import React from 'react';
import { Form,Col,ItemLayout, Icon, Input, Button, Checkbox } from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const error =()=> (
  <div id="container">
    <Col id="col" span={10} offset={7}>
      <div id="content">
        <div id="errorMessage">
          <Icon id="icon" type="frown-o" /><h1 style={{color:'red'}}>Error 404 Not Found!</h1>
        </div>
      </div>
    </Col>
  </div>
);

export default error;
