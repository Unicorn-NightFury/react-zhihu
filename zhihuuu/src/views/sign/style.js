import styled from 'styled-components';


/**
 * 登录注册页统一父容器
 */
export const SignBox = styled.div`
    position: fixed;
    height: 400px;
    width: 400px;
    /* background-color: black; */
    border: 2px solid #f8f8f8;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
`

/**
 * 登录注册页统一标题
 */
export const SignTitle = styled.div`
    position: relative;
    height: 70px;
    width: 100%;
    line-height: 70px;
    text-align: center;
    font-size: 25px;
    color: #1890ff;
    border-bottom: 1px solid #f8f8f8;
`

export const SignInput = styled.div`
    position: relative;
    width: 100%;
    right: 30px;
    top: 40px;
    .form-item-control {
        width:250px;
        border-left:0;
        border-right:0;
        border-top:0;
    }
    .RememberItem {
        position: relative;
        left: 150px;
        bottom: 10px;
    }
    .ant-input:focus {
        border-left:0;
        border-right:0;
        border-top:0;
        box-shadow:0 1px 0 rgba(24, 144, 255, 0.2);
    }
    .ant-input-affix-wrapper-focused {
        border-left:0;
        border-right:0;
        border-top:0;
        box-shadow:0 1px 0 rgba(24, 144, 255, 0.2);
    }

`

export const LoginButton = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sign-button {
        position: relative;
        width:80%;
    }
    .sign-link:hover { 
       /* box-shadow: inset 0 0 0 1px #1890ff;*/
       box-shadow: 0 5px 5px -5px #ccc;
    }
`

export const RegisterButton = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 56px;
    .register-button {
        position: relative;
        width:80%;
    }
    .sign-link:hover { 
        box-shadow: 0 5px 5px -5px #ccc;
    }
`