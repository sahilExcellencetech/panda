import React from 'react';
import { Col,Form, Icon, Input, Button,Collapse} from 'antd';
import style from '../index.css'
const Panel = Collapse.Panel;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
   
  </p>
);

class Calendar extends React.Component {
    render(){
      return(
<Col id="col-calendar" span={10} offset={6}>
  <div id="content">
      <div id="text-calendar">
      On 8 November 2016, the Government of India announced the demonetisation
       of all ₹500 (US$7.80) and ₹1,000 (US$16) banknotes of the Mahatma Gandhi
        
      </div>
        <h1 id="feb">February</h1>
         <Collapse bordered={false} >
               <Panel header="13"  key="1">
                {text}
                </Panel>
                <Panel header="14" key="2">
                {text}
                </Panel>
                <Panel header="15" key="3">
                {text}
                </Panel>
                <Panel header="16" key="4">
                 {text}
                 </Panel>
           </Collapse> 
     </div >
  </Col>
      );
    }
}

const WrappedCalendar = Form.create()(Calendar);

export default WrappedCalendar;