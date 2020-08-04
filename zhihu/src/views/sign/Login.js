import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <Fragment>
                 <div>this is login page</div>
                <Link to='/register'>去注册</Link>
            </Fragment>
        )
    }
}

export default Login