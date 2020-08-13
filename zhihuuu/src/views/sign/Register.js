import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import {
    SignBox,
    SignTitle,
    SignInput,
    RegisterButton
} from './style'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux';
import { actions } from './store'

class Register extends Component {
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        return (
            <Fragment>
                <SignBox>
                    <SignTitle>注册</SignTitle>
                    <Form {...layout} name="basic" >
                        <SignInput>

                            <Form.Item
                                label="用户名"
                                name="Username"
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
                        </SignInput>
                    </Form>

                    <RegisterButton>
                        <Button type="primary" className='register-button' onClick={this.props.register}>注册</Button>
                        <Link to='/login' className='sign-link'>已有账号，登录</Link>
                    </RegisterButton>
                </SignBox>
            </Fragment>
        );
    }
}


const dispatchToProp = dispatch => {
    return {
        register() {
            let name = document.getElementsByClassName("form-item-control")[0].value;  
            axios.get('/data.json').then((res) => {
                let obj = res.data.userMessage;
                let i = obj.length;
                console.log(res.data.userMessage);
                /*obj.map((e) => {
                    console.log(e.name)
                    if (e.name === name) {  //如果重名了
                        console.log('用户名已存在');
                        return false;  //无效
                    }
                })*/
                for (let j = 0; j<i; j++) {
                    if (obj[j].name === name) {  //如果重名了
                        console.log('用户名已存在');
                        return false;  
                    }
                }

                    dispatch(actions.handleRegister())
            }).catch(() => console.error('┗|｀O′|┛ 嗷~~'));
           
        }
    }
}

export default connect(null, dispatchToProp)(Register);