import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import {
    SignBox,
    SignTitle,
    SignInput,
    SignButton
} from './style'
import { connect } from 'react-redux';
import { actions } from './store'




class Login extends Component {

    render() {
        const { handleLogin } = this.props;
        return (
            <Fragment>
                <SignBox>
                    <SignTitle>登录</SignTitle>
                    <SignInput>
                        <Input className="sign-input" placeholder="用户名"></Input>
                    </SignInput>
                    <SignInput>
                        <Input className="sign-input" placeholder="密码"></Input>
                    </SignInput>
                    <SignButton>
                        
                        <Button  type="primary" className="sign-button" onClick={handleLogin}>登录</Button>
                    
                    </SignButton>
                    <Link to='/register'className="sign-link">
                        去注册
                    </Link>
                </SignBox>
            </Fragment>
               
        )
    }
}

const dispatchToProp = dispatch => {
    return {
        handleLogin() {
            dispatch(actions.handleLogin())
        }
    }
}


export default connect(null, dispatchToProp)(Login);