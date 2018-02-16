import React from 'react';
import { Form,Col, Button,Select} from 'antd';

const FormItem = Form.Item;
const { Option, } = Select;
const x= new Date().getFullYear();
const y = x-50;
var foo=[];
for (var i = x; i > y; i--) {
   foo.push(i);
}




function handleChange(value) {
  console.log(`selected ${value}`);
}

class MyCVForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
       data:foo,
    }
  }
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
    const list=this.state.data.map((data,id)=>
    <Option value={data}>{data}</Option>
    );

    return (
      <Col id="col" span={10} offset={7}>
        <div id="content">
          <h1>My CV</h1>
          <Form onSubmit={this.handleSubmit} layout="inline" className="login-form">
            <p>When did you finish your professional education and when did you start to work as a freelancer?</p>
            <div className="my-div" style={{width:'100%'}}>

                <div id="professionalSince">
                <FormItem layout="inline">
                {getFieldDecorator('Select1', {
                    rules: [{ required: true, message:'Year is required'}],
                })(
                    <Select placeholder="Professional Since"  onChange={handleChange}>
                  {list}
                    </Select>
                  )}
                  </FormItem>
                  </div>
                  <div id="freelancerSince">
                  <FormItem layout="inline">
                  {getFieldDecorator('Select2', {
                      rules: [{ required: true, message:'Year is required'}],
                  })(

                  <Select placeholder="Professional Since"  onChange={handleChange}>
                {list}
                  </Select>
                  )}
                    </FormItem>
                    </div>
                
                <br/>
                <br/>
                  <p>Where you have been emploed before? Please add your employment history here.</p>
                  <br/>
                  <p style={{ 'textAlign':'center' }}>Add Additional employer here</p>
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
