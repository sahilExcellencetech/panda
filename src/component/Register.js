import React from 'react';

import { Form,Col, Input, Button, notification } from 'antd';


const FormItem = Form.Item;

class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        notification.open({
          message: 'Successfully Registered',
          description: 'You are successfully registered on our website.',
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col id="col" span={13} offset={5}>
        <div id="content">
          <h1>Finish Registration</h1>
          <Form onSubmit={this.handleSubmit} layout="inline" className="login-form">
            <div id="fix">
            <FormItem>
              E-Mail Address*
              {getFieldDecorator('email', {
                rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
              }, {
              required: true, message: 'Please input your E-mail!',
              }],
              })(
                <Input type="email" />
              )}
            </FormItem>
            </div>
            <FormItem>
              Password*
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input  type="password" />
              )}
            </FormItem>
            <FormItem >
              First Name
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'First Name is required!' }],
              })(<Input  type="text"/>)}
            </FormItem>
            <FormItem >
              Last Name
              {getFieldDecorator('lastname', {
                rules: [{ required: true, message: 'Last Name is required!' }],
              })(<Input  type="text"/>)}
            </FormItem>
            <div id="fix">
            <FormItem >
              Mobile Phone Number
              {getFieldDecorator('number', {
                rules: [{ required: true, message: 'Mobile Number is required!' }],
              })(<Input  type="number"/>)}
            </FormItem>
            </div>
            <p style={{'marginTop':'20px'}}><b>Important Note:</b> We will never publish your phone number - we justuse it,
              when we recieve specific booking requests for you. By clicking the save
              button, you accept our general terms and our data protection regulations.</p>
              <div className="my-div" style={{width:'100%'}}>
              <FormItem>
                <Button htmlType="submit" id="register-form-button" className="login-form-button">
                  Save now and start for free
                </Button>
              </FormItem>
              </div>

          </Form>
        </div>
        <br/>
      </Col>
    );
  }
}

const WrappedRegisterForm = Form.create()(RegisterForm);
export default WrappedRegisterForm;
