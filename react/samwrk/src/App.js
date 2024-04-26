import logo from './logo.svg';
import './App.css';
import CallDetailsTable from './Components/Sam1';
import UserDashboard from './Components/Sam2';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Routes from './Components/routes';
import AuthProvider from './Components/Provider/authprovider';
function App() {
  return (
    <>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    {/* <CallDetailsTable/> */}
    {/* <UserDashboard/> */}
    </>
  );
}

export default App;
