// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import { AuthProvider } from './AuthContext';
function App() {
  return (
   
    <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  </AuthProvider>
      
    
  );
}

export default App;
