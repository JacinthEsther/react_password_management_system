import './App.css';
import Register from './components/userAccount/Register';
import Login from './components/userAccount/Login';
import Update from './components/userAccount/Update';

function App() {
  return (
    <div className="App">
      <Register/>
      {/* <Update/> */}
      <Login/>
    </div>
  );
}

export default App;
