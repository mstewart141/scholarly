import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Temp from './components/Temp';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';

render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route path="/temp" component={Temp} />
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
