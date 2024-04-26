import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallDetailsTable from './Components/Sam1';
import UserDashboard from './Components/Sam2';
import { BrowserRouter,Route } from 'react-router-dom';
import Routes from './Components/routes';
import AuthProvider from './Components/Provider/authprovider';
function App() {
  return (
    <>
     {/* <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter> */}

    <AuthProvider>
      <Routes/>
    </AuthProvider>
    {/* <CallDetailsTable/> */}
    {/* <UserDashboard/> */}
    </>
  );
}

export default App;
