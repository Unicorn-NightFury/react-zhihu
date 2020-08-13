import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import {
    SignBox,
    SignTitle,
    SignInput,
    LoginButton
} from './style' 
import 'antd/dist/antd.css'
import { connect } from 'react-redux';
import { actions } from './store'

class Login extends Component {
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        return (
            <Fragment>
                <SignBox>
                    <SignTitle>登录</SignTitle>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <SignInput>
                            <Form.Item
                                label="用户名"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '用户名不能为空!',
                                    },
                                ]}
                            >
                                <Input className="form-item-control" />
                            </Form.Item>
                            <Form.Item
                                label="密码"
                                name="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: '密码不能为空!',
                                    },
                                ]}
                            >
                                <Input.Password className="form-item-control" />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked"  className='RememberItem'>
                                <Checkbox>Remember</Checkbox>
                            </Form.Item>
                        </SignInput>
                    </Form>

                    <LoginButton>
                        <Button type="primary" onClick={this.props.Login} className='sign-button'>登录</Button>
                        <Link to='/register' className='sign-link'>没有账号？注册一个</Link>
                    </LoginButton>
                </SignBox>
            </Fragment>
        );
    }
}

const dispatchToProp = dispatch => {
    return {
        Login() {  
            dispatch(actions.handleLogin()) 
        }
    }
}
export default connect(null, dispatchToProp)(Login);  