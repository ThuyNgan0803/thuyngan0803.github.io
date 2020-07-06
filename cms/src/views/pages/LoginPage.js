import React, { Component } from 'react';
import { Card, Spin, Form, Input, Button, Checkbox, Alert } from 'antd';
import {login} from '../api/index'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span:8 },
  };
  


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {
            username: "",
            password: ""
        },
        message: {
            err: "",
            success: ""
        },
        loading: false,
    }
}

btnLogin = (event) => {
    // console.log("Click login")
    this.setState({ loading: true, message: { }})
    login(this.state.data).then(res => {
        // console.log("Data:", res.data)
        if (res.data.token) {
            // console.log("Login successfull")
            localStorage.setItem("token", res.data.token)
            // redirect to homepage
            setTimeout( () => {
                window.location.href = "/"
            }, 1000)
            this.setState({message: {success: "Successfull"}})
            this.setState({ loading: false})
        }
    }).catch(err => {
        console.log(err.response);
        this.setState({ loading: false})
        this.setState({ message: {err: err.response.data.err}})
    })
    event.preventDefault();
}

onDataChange = (event) => {
    // Cach 1
    // console.log(event.target.name)
    // console.log(event.target.value)
    // let name = event.target.name
    // let value = event.target.value
    // if (name === "username") {
    //     this.setState({
    //         data: {
    //             ...this.state.data,
    //             username: value,
    //             // password: this.state.data.password
    //         }
    //     })
    // } else if (name === "password") {
    //     this.setState({
    //         data: {
    //             ...this.state.data,
    //             // username: this.state.data.username,
    //             password: value
    //         }
    //     })
    // }

    // Cach 2
    this.setState({ data: { ...this.state.data, [event.target.name]: event.target.value}})
}
    render() {
      const {data, message,loading} = this.state;
        return (
          <Card title= "Login Page" style={{textAlign: "center"}}>
          <Form
              {...layout}
              name="basic"
              initialValues={{ 
                remember: true,
                username: data.username,
                password: data.password,
               }}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
          >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input name="username" defaultValue={data.username} value={data.username} onChange={this.onDataChange} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" defaultValue={data.password} value={data.password} onChange={this.onDataChange}/>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={this.btnLogin}  type="primary" htmlType="submit" disabled = {loading}>
              {loading ? <Spin/> : "Submit"}
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
      </Form.Item>
    </Form>
          </Card>       
        );
    }
}

export default LoginPage