import React from 'react';
import { Col,Form, Icon, Input, Button,Collapse} from 'antd';
import style from '../index.css'

class Profile extends React.Component {
render(){
    return(
        <Col id="col-calendar" span={10} offset={6}>
        <div id="text-inquiries"> asd asd<div id="profile-icon"><Icon type="picture" /></div></div>
            <div id="content">
            Viele von uns suchen
             </div>   
        </Col>
    );
}
}


export default Profile;