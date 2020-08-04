import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sign from './views/sign'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Sign}/>
    </Router>
  );
}

export default App;
