import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Sign extends Component {
    render() {
        return (
            <Router>
               {this.props.children}
            </Router>
        )
    }
}


export default Sign;