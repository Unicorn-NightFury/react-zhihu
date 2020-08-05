import styled from 'styled-components';

/**
 * 登录注册页统一父容器
 */
export const SignBox = styled.div`
    position: fixed;
    height: 400px;
    width: 500px;
    /* background-color: black; */
    border: 2px solid #f8f8f8;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    .sign-link {
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, 0)
    }
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
    height: 100px;
    width: 100%;
    /* margin-top: 15px; */
    display: flex;
    /* justify-items: center;
    align-items: center; */
    .sign-input {
        position: relative;
        height: 40px;
        width: 80%;
        margin: auto;
    }
`

export const SignButton = styled.div`
    position: relative;
    height: 100px;
    width: 100%;
    display: flex;
    .sign-button {
        position: relative;
        margin: auto;
    }
`