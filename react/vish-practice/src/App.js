import './App.css';
// import Color from './Components/Color';
// import Color from './Components/Color2';
// import Todo from './Components/Todolist';
// import Task from './Components/Taskclk';
// import Calender from './Components/Practice';
// import './Taskclk.css';
// import Counter from './Components/Prac';
import Funcform from './Components/Funcform';
import MySuspenseComponent from './Components/Susp';
import ConditionalRendering from './Components/Taskclk';
function App() {
  const [isLoggedIn,setIsLoggedIn] =React.useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div className="App">
    {/* <Color></Color> */}
    {/* <Todo></Todo> */}
    {/* <Task></Task> */}
    {/* <Calender></Calender> */}
    {/* <Counter/> */}
    {/* <Funcform/> */}
    <ConditionalRendering/>/
    <button>
    <LoginButton isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
    </button>
    {/* <MySuspenseComponent/> */}






    </div>

  );
}

export default App;
