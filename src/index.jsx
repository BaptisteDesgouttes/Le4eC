//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
//components
import Monitor from './monitoring/Monitor.jsx';
import Chat from './components/Chat/Chat.jsx'
import Back from './components/Back/Back.jsx'
import Ings from "./components/Ings/Ings.jsx"
import Step from "./components/Step/Step.jsx"

import reportWebVitals from './reportWebVitals';

// let recipesNames = ['test', 'autre test'];
// let recipeName = 'autre test';

let recipeName = "test";

ReactDOM.render(

  <React.StrictMode>
    <Router>
        <Switch>

          {/* Monitors online and in real time the different pages */}
          <Route exact path='/'>
            <Monitor />
          </Route>

          {/* Pages to render in OBS */}

          <Route path='/chat'>
            <Chat />
          </Route>
          
          <Route path='/back'>
            <Back name={recipeName} />
          </Route>
          
          <Route path='/ingredients'>
            <Ings name={recipeName} />
          </Route>
          
          <Route path='/step'>
            <Step name={recipeName} />
          </Route>

        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
