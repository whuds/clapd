import React from 'react';
import logo from './logo.svg';
import './App.css';


import Home from './home.js';
import Upload from './upload.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        Upload, edit, and share your clips with the world. 
        
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>

          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>

      </header>
    </div>
  );
}

export default App;
