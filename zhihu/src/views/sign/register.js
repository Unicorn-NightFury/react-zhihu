import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return (
            <Fragment>
                <div>this is register page</div>
                <Link to="/login">去登陆</Link> 
            </Fragment>
        )
    }
}

export default Register