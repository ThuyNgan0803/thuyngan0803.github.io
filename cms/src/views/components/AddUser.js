import React, { Component } from 'react'
import { Form, Input, Select, Tooltip, Button,Spin, message } from 'antd';
import {addUser} from '../../actions/UserAction'
import {connect} from 'react-redux'

const { Option } = Select;

 class AddUser extends Component {
    constructor(props) {
         super(props);
        this.state = {
            username: "",
            address: {
                province: "",
                street: "",
            },
            birthday: {
                birthYear: "",
                birthMonth: "",
            },
            loading: false,
        }
    }

    onFinish = (value) => {
        console.log('Received values of form: ', value);
        this.setState({loading: true})
        this.props.addUser(value).then(data => {
            this.setState({loading: false, message: "Add user successful"})
            message.info('Add user successful!')
        })
    }

    onAddressChange = (key, value) => {
        console.log(key, value)
        this.setState({
            address: {
                ... this.state.address,
                key: value
            }
        })
    }

    onDataChange = (event) => {
        this.setState({
            data: {
                ... this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    onBirthdayChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            birthday: {
                ... this.state.birthday,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
            <Form 
                name="complex-form" 
                onFinish={this.onFinish} 
                labelCol={{ span: 8 }} 
                wrapperCol={{ span: 16 }}
            >
              <Form.Item label="Username">
                <Form.Item
                  name="username"
                  noStyle
                  rules={[{ required: true, message: 'Username is required' }]}
                >
                <Input 
                    style={{ width: 160 }} 
                    placeholder="Please input" 
                    onChange={this.onDataChange}
                />
                </Form.Item>
                <Tooltip title="Useful information">
                  <a href="#API" style={{ margin: '0 8px' }}>
                    Need Help?
                  </a>
                </Tooltip>
              </Form.Item>
              <Form.Item label="Address">
                <Input.Group compact>
                  <Form.Item
                    name={['address', 'province']}
                    noStyle
                    rules={[{ required: true, message: 'Province is required' }]}
                  >
                    <Select 
                        placeholder="Select province"
                        name="province"
                        onChange={ (value) => { this.onAddressChange(value)}}
                    >
                      <Option value="Hanoi">Ha Noi</Option>
                      <Option value="Hcm">Ho Chi Minh</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name={['address', 'street']}
                    noStyle
                    rules={[{ required: true, message: 'Street is required' }]}
                  >
                    <Input 
                        style={{ width: '50%' }} 
                        placeholder="Input street" 
                        onChange = {this.onBirthdayChange}
                    />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
              <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="year"
                  rules={[{ required: true }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                <Input 
                    placeholder="Input birth year" 
                    name = "street"
                    onChange={ (value) => { this.onAddressChange(value)}}
                />
                </Form.Item>
                <Form.Item
                  name="month"
                  rules={[{ required: true }]}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                  <Input placeholder="Input birth month" />
                </Form.Item>
              </Form.Item>
              <Form.Item label=" " colon={false}>
                <Button 
                    type="primary" 
                    htmlType="submit"
                >
                    {this.state.loading ? <Spin /> : "Submit"}
                </Button>
              </Form.Item>
            </Form>
            </div>
        )
    }
}
export default connect(null, { addUser })(AddUser)
