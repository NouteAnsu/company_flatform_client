import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './pages/login/Login'
import Regist from './pages/regist/Regist'
import SearchUsername from './pages/searchUser/SearchUsername'
import SearchPassword from './pages/searchUser/SearchPassword'
import Home from './pages/Home'

const App = () => {

  return (
    <div className="App" style={{height:'100%'}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact></Route>
          <Route path="/regist" component={Regist}></Route>
          <Route path="/search/id" component={SearchUsername}></Route>
          <Route path="/search/pwd" component={SearchPassword}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
