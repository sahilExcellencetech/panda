import React from 'react';
import { Col,Form, Icon, Input, Button,Collapse} from 'antd';
import style from '../index.css'

class Inquiries extends React.Component {
render(){
   
    return(

        <Col id="col-calendar" span={10} offset={6}>
        <div id="text-inquiries"> Soon</div>
            <div id="content">
            Viele von uns suchen Ruhe und Entspannung in der doch sehr hektischen und schnelllebigen 
            Zeit. Passend dazu habe ich einige Zitate gefunden. Wie Sie vielleicht mittlerweile schon
            wissen, liebe ich Zitate, da sie mit wenigen Worten Wesentliches auf den Punkt bringen.Gut,
            und hier sind sie also zum Thema Ruhe und Entspannung:Das beste aller Güter, wenn es
             überhaupt Güter gibt, ist die Ruhe,
die Zurückgezogenheit und ein Plätzchen, das man sein eigen nennen kann.
             </div>   
        </Col>

    );
}

}


export default Inquiries;