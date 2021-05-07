import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import MainNavbar from './components/MainNavbar/MainNavbar';
import { useState } from 'react';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import usersJSON from './data/users.json'
import UserModel from './model/UserModel';

function App() {
  // const [activeUser, setActiveUser] = useState(null);
  //const [activeUser, setActiveUser] = useState({id:"1", name:"Adi Mor", email:"adi@adi.com", apartement:"1", role:"admin"});
  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [activeUser, setActiveUser] = useState(users[0]);
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <MainNavbar  activeUser={activeUser}  onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route>
          <Route exact path="/signup" ><SignupPage/></Route>
          <Route exact path="/dashboard" >
            <MainNavbar activeUser={activeUser}  onLogout={() => setActiveUser(null)}/>
            <DashboardPage activeUser={activeUser}/>
          </Route>
          {/* <Route exact path="/tenants" ><TenantsPage/></Route>
          <Route exact path="/messages" ><MessagesdPage/></Route>
          <Route exact path="/new-message" ><NewMessagePage/></Route>
          <Route exact path="/votings" ><Votings/></Route>
          <Route exact path="/new-voting" ><NewVoting/></Route> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
