import React from 'react';
import { Col, Icon} from 'antd';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
render(){
    return(
        <Col id="col-calendar" span={10} offset={6}>
        <div id="text-profile"> asd asd<div id="profile-icon"><Icon type="picture" /></div></div>
            <div id="content-profile">
           <div id="profile-content"> <Link to="" id="link">My Website</Link></div>
           <div id="profile-content"> <Link to="/about" id="link">About me</Link></div>
           <div id="profile-content"> <Link to="/signalment" id="link">Singlament</Link></div>
           <div id="profile-content"> <Link to="/mycv" id="link">My CV</Link></div>
           <div id="profile-content"> <Link to="" id="link">Payment</Link></div>
           <div id="profile-content"> <Link to="" id="link">Verification</Link></div>
           <div id="profile-content"> <Link to="" id="link">Valuation</Link></div>
           <div id="profile-content"> <Link to="/" id="link">Logout</Link></div>
             </div>   
        </Col>
    );
}
}


export default Profile;