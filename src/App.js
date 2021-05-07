import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import MainNavbar from './components/MainNavbar/MainNavbar';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <MainNavbar/>
            <HomePage/>
          </Route>
          <Route exact path="/login"><LoginPage/></Route>
          <Route exact path="/signup" ><SignupPage/></Route>
          {/* <Route exact path="/dashboard" >
            <RecipeNavbar/>
            <DashboardPage/>
          </Route>
          <Route exact path="/tenants" ><TenantsPage/></Route>
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
