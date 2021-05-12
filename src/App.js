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
import Parse from 'parse';
import IssuePage from './pages/IssuePage/IssuePage';
import MessagePage from './pages/MessagePage/MessagePage';
import VotingPage from './pages/VotingPage/VotingPage';
import TenantsPage from './pages/TenantsPage/TenantsPage';

function App() {
  //manually
  // const [activeUser, setActiveUser] = useState(null);
  //const [activeUser, setActiveUser] = useState({id:"1", name:"Adi Mor", email:"adi@adi.com", apartement:"1", role:"admin"});
  //how to use json file
  // const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  // const [activeUser, setActiveUser] = useState(users[0]);
  //Parse save active user in local storage, afrer refresh the user still logged in
  const [activeUser, setActiveUser] = useState(UserModel.activeUser() ? new UserModel(UserModel.activeUser()) : null);

  //Inorder to clean local storage we need to do parse logout
  function handleLogout() {
    setActiveUser(null);
    UserModel.logout();
  }

  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <MainNavbar  activeUser={activeUser}  onLogout={() => setActiveUser(null)}/>
            <HomePage/>
          </Route>
          {/* Using json <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route> */}
          <Route exact path="/login">
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <LoginPage activeUser={activeUser} onLogin={user => setActiveUser(user)}/>
            </Route>
          <Route exact path="/signup" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <SignupPage activeUser={activeUser} onLogin={user => setActiveUser(user)}/>
          </Route>
          <Route exact path="/dashboard" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <DashboardPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/tenants" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <TenantsPage activeUser={activeUser}/>
          </Route>
          <Route exact path="/messages" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <MessagePage activeUser={activeUser}/>
          </Route>
          <Route exact path="/issue" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <IssuePage activeUser={activeUser}/>
          </Route>
          <Route exact path="/vote" >
            <MainNavbar activeUser={activeUser}  onLogout={handleLogout}/>
            <VotingPage activeUser={activeUser}/>
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
