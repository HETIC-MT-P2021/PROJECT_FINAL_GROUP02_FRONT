import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { SocketContext, socket } from './context/socket';
import App from './App';
import Error404 from './view/Error404';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <Router>
        <Switch>
          <Route exact path="/:dungeonId(\d+)" component={App}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </Router>
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
