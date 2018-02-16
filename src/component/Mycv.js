import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../index.css';
import { Form,Col,ItemLayout, Icon, Input, Button, Checkbox,Select} from 'antd';
import style from 'antd/dist/antd.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';


const FormItem = Form.Item;
const { TextArea } = Input;
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class MyCVForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col id="col" span={10} offset={7}>
        <div id="content">
          <h1>My CV</h1>
          <Form onSubmit={this.handleSubmit} layout="inline" className="login-form">
            <p>When did you finish your professional education and when did you start to work as a freelancer?</p>
            <div className="my-div" style={{width:'100%'}}>
                <FormItem>
                <Select defaultValue="Professional Since" style={{ width: 233, 'margin-right':15 ,border:'0', outline:'none'}} onChange={handleChange}>
                <Option value="2018">2018</Option>
                <Option value="2017">2017</Option>
                <Option value="2016">2016</Option>
                  </Select>
                  <Select defaultValue="Freelancer Since" style={{ width: 233 }} onChange={handleChange}>
                    <Option value="2018">2018</Option>
                    <Option value="2017">2017</Option>
                    <Option value="2016">2016</Option>
                    </Select>
                </FormItem>
                <br/>
                <br/>
                  <p>Where you have been emploed before? Please add your employment history here.</p>
                  <br/>
                  <p style={{ 'text-align':'center' }}>Add Additional employer here</p>
                  <br/>
              <FormItem>
                <Button htmlType="submit" id="register-form-button" className="login-form-button">
                  Save
                </Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </Col>
    );
  }
}

const WrappedMyCVForm = Form.create()(MyCVForm);
export default WrappedMyCVForm;
