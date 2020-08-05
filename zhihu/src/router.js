import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import User from './views/user'
import Login from './views/sign/Login'
import { connect } from 'react-redux'
import Register from './views/sign/register'
import 'antd/dist/antd.css'

class App extends Component {
    render() {

        const {isLogin} = this.props

        return (
            <Router>
                <Fragment>
                    <Route exact={true} path='/login' component={Login}/>
                    <Route exact={true} path='/register' component={Register} />
                    <Route exact={true} path='/user' component={User}/>
                    <Route exact path='/' render={() => (
                        isLogin ? <Redirect to="/user"/> : <Redirect to="/login" />
                    )}/>
                </Fragment>
            </Router>  
        )
    }
}

function stateToProps(state) {
    return {
        isLogin: state.getIn(['sign', 'isLogin'])
    }
}

export default connect(stateToProps, null)(App);