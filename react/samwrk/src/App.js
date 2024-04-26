import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallDetailsTable from './Components/Sam1';
import UserDashboard from './Components/Sam2';
import Routes from './Components/routes';
import AuthProvider from './Components/Provider/authprovider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../src/Components/Login';
import HomePage from './Components/HomePage';
import ProtectedRoute from "../src/Components/routes/ProtectedRoute";
function App() {
  return (
    <>
      {/* <UserDashboard/> */}
{/* <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/" component={HomePage} />
        </Switch>
      </Router>
    </AuthProvider> */}
    {/* <AuthProvider>
      <Routes/>
    </AuthProvider> */}
    <CallDetailsTable/>
  
    </>
  );
}

export default App;

