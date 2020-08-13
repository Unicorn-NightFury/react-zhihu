import axios from 'axios'

const loginData = () => ({  
    type: 'login',
    value: true
})

const registerDate = () => ({
    type: 'register',
    value: true
})


export const handleLogin = () => {
    return(dispatch) => {
        axios.get('/data.json').then((res) => {  //传入函数，等异步操作完再触发reducer
            console.log(res.data.data);
            dispatch(loginData());
        }).catch(() => console.error('wrong'))
    }
}

export const handleRegister = () => {
    return(dispatch) => {
        console.log('注册成功！')
        dispatch(registerDate());
    }
}