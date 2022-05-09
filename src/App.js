import './App.css';
import Register from './components/userAccount/Register';
import Login from './components/userAccount/Login';
import Update from './components/userAccount/Update';
import GetAll from './components/userAccount/GetAll';
import GetOneUser from './components/userAccount/GetOneUser';

function App() {
  return (
    <div className="App">
      <Register/>
      <Update/>
      <Login/>
      <GetOneUser/>
      <GetAll/>

    </div>
  );
}

export default App;
