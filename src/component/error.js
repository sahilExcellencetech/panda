import React from 'react';
import {Col, Icon} from 'antd';


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
