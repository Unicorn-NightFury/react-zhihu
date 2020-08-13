import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../src/views/sign/Login'
import Register from '../src/views/sign/Register'
import { connect } from 'react-redux'

class App extends Component {
    render() { 
        const {isLogin} = this.props;  
        return (  
            <Router>
            <Fragment>
                <Route exact={true} path='/login' component={Login} />
                <Route exact={true} path='/register' component={Register} />
                <Route exact path='/' render={ () => (  
                    isLogin ? <Redirect to="/register" /> : <Redirect to="/login" />  
                )} />
            </Fragment>
            </Router>
        );
    }
}
 

function stateToprops(state) { 
    return{  
        isLogin : state.getIn(['sign','isLogin'])  //介个isLogin在自己组件对应的reudcers里面
        //写一个对象，将state映射成一个props
    }
}

export default connect(stateToprops,null)(App) 