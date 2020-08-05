import axios from 'axios'

const loginData = () => ({
    type: 'login',
    value: true
})

export const handleLogin = () => {
    return (dispatch) => {
        axios.get('/data.json').then((res) => {
            console.log(res);
            dispatch(loginData());
        }).catch(() => console.error('wrong'))
    }
}