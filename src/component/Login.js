import React from 'react';
import { Form,Col, Input, Button } from 'antd';
import {Link} from 'react-router-dom';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
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
    <div id="container">
      <Col id="col" span={10} offset={7}>
      <div id="content">
      <h1>Login</h1>

      <Form onSubmit={this.handleSubmit} className="login-form">
      <FormItem >
      E-Mail Address*
        {getFieldDecorator('email', {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }],
        })(
          <Input type="text" />
        )}
      </FormItem>
        <FormItem>
        Password*
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input  type="password" />
          )}
        </FormItem>
        <FormItem>
        <Button htmlType="submit" id="login-form-button" className="login-form-button">
          Login
        </Button>
          <div id="links">
          <Link to="/forgetpassword">Forgot password? Reset it!</Link><br />
          <Link  to="/register">No Account yet? Register now!</Link>
          </div>
        </FormItem>
      </Form>
      </div>
      </Col>
      </div>
    );
  }
  }

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
