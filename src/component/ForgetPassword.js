import React from 'react';
import { Col,Form, Input, Button} from 'antd';
const FormItem = Form.Item;

class ForgetPassword extends React.Component {
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
     <Form onSubmit={this.handleSubmit} className="login-form">

     <FormItem >
 E-mail Address*
    {getFieldDecorator('email', {
      rules: [{
        type: 'email', message: 'The input is not valid E-mail!',
      }, {
        required: true, message: 'Please input your E-mail!',
      }],
    })(
      <Input type="text" className="input-email" />
    )}
  </FormItem>

       <FormItem>
         <div><Button  id="login-form-button" htmlType="submit" className="login-form-button">
           Reset Password
         </Button></div>
       </FormItem>
     </Form>
     </div>
     </Col>
   );
 }
}
const WrappedForgetPassword = Form.create()(ForgetPassword);

export default WrappedForgetPassword;
