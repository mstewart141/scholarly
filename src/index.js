import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store/store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Todo = () =>
  <div>
    <h2>Todo</h2>
    <Link to={"/app"}>App</Link>
  </div>;

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/app" component={App} />
        <Route path="/" component={Todo} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
