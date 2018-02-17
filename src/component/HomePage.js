import React from 'react';
import { Col,Form, Icon, Input, Button,Tabs} from 'antd';
import Calandar from './Calendar'

const TabPane = Tabs.TabPane;
class HomePage extends React.Component {
  render(){
    return(
      
         <Tabs style={{width:'100%'}} >
                  <TabPane  tab={<span><span id="tabs-icon"><Icon type="calendar" /><br/></span>
                  <span >Calender</span></span>} key="1"><div><Calandar /></div></TabPane>

                  <TabPane  tab={<span><span id="tabs-icon"><Icon type="mail" /><br/></span>
                  <span >Inquerie </span></span>} key="2"></TabPane>

                  <TabPane  tab={<span><span id="tabs-icon"><Icon type="bar-chart" /><br/></span>
                  <span >Inovice</span></span>} key="3"></TabPane>

                  <TabPane  tab={<span><span id="tabs-icon"><Icon type="user" /><br/></span>
                  <span >Profile</span></span>}key="4"></TabPane>
          </Tabs>
    );
  }
}
export default HomePage;
