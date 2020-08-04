import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import User from './views/user'
import Login from './views/sign/Login'

import Register from './views/sign/register'

class App extends Component {
    render() {

        let isLogin = false;

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

export default App