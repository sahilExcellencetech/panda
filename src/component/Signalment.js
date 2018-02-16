import React from 'react';
import style from 'antd/dist/antd.css';
import {Form, Col,Select, notification, Input, Switch, Button } from 'antd';
import {BrowserRouter,Route,Link} from 'react-router-dom';

const FormItem = Form.Item;
const Option = Select.Option;

function onChange(checked) {
console.log(`switch to ${checked}`);
}

class SingnalmentForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {

      if (!err) {
        console.log('Received values of form: ', values);
        notification.open({
          message: 'Successfully Updated',
          description: 'Your information has been successfully updated.',
        });
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Col id="col" span={10} offset={7}>
      <div id="content">
      <h1>Signalment</h1>
      <Form  onSubmit={this.handleSubmit} >
        <FormItem >
          {getFieldDecorator('facilities', {
            rules: [{ required: true, message: 'Please select your facilities!' }],
          })(
            <Select
              placeholder="Facilities"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Qualification', {
            rules: [{ required: true, message: 'Please select your Qualifications!' }],
          })(
            <Select
              placeholder="Additional Qulifications"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <div id="signalment-Input-Location">
        <FormItem>
          {getFieldDecorator('Location', {
            rules: [{ required: true, message: 'Please input your Location!' }],
          })(
            <Input placeholder="Location" />
          )}
          </FormItem>
          </div>
          <div id="signalment-Input-Distance">
          <FormItem>
          {getFieldDecorator('Distance', {
            rules: [{ required: true, message: 'Please input your Distance!' }],
          })(
            <Input placeholder="Distance of work               km" />
          )}
        </FormItem>
        </div>
        <FormItem >
          {getFieldDecorator('Working_Shift', {
            rules: [{ required: true, message: 'Please select your Working Shift!' }],
          })(
            <Select
              placeholder="Working Shifts"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('Pension', {
            rules: [{ required: true, message: 'Please select your Remission of Pension Charges!' }],
          })(
            <Select
              placeholder="Remission of Pension Charges"
              onChange={this.handleSelectChange}
            >
              <Option value="Value#1">Value#1</Option>
              <Option value="Value#2">Value#2</Option>
            </Select>
          )}
        </FormItem>

        <FormItem>
        <h4 id="signalment-h4">Driver License</h4>
          <Switch  id="signalment-Switch" defaultUnChecked onChange={onChange} />
        </FormItem>
        <FormItem>
        <h4 id="signalment-h4">Own Car</h4>
          <Switch id="signalment-Switch" defaultUnChecked onChange={onChange} />
        </FormItem>
        <FormItem>
          <Button htmlType="submit" id="register-form-button" className="login-form-button">
            Save
          </Button>
        </FormItem>
      </Form>
      </div>
      </Col>
    );
  }
}

const WrappedSingnalmentForm = Form.create()(SingnalmentForm);
export default WrappedSingnalmentForm;
