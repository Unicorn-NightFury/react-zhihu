import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import {
    SignBox,
    SignTitle,
    SignInput,
    SignButton
} from './style'

class Login extends Component {
    render() {
        return (
            <Fragment>
                <SignBox>
                    <SignTitle>注册</SignTitle>
                    <SignInput>
                        <Input className="sign-input" placeholder="用户名"></Input>
                    </SignInput>
                    <SignInput>
                        <Input className="sign-input" placeholder="密码"></Input>
                    </SignInput>
                    <SignButton>
                            <Button  type="primary" className="sign-button">注册</Button>
                    </SignButton>
                    <Link to='/login'className="sign-link">
                        去登陆
                    </Link>
                </SignBox>
            </Fragment>
               
        )
    }
}

export default Login