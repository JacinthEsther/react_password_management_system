import './App.css';
import Register from './components/userAccount/Register';
import Login from './components/userAccount/Login';
import Update from './components/userAccount/Update';
import GetAll from './components/userAccount/GetAll';
import GetOneUser from './components/userAccount/GetOneUser';
import AddPassword from './components/passwordAccount/AddPassword';
import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Authentication />}/>
        <Route exact path="/user/addPassword" element={<AddPassword/>}/>
        
        </Routes>
        

          
        
      {/* <Update/>
      
      <GetOneUser/>
      <GetAll/>
      <AddPassword/> */}
      </Router>
    </div>
  );
}

export default App;
