import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store/store';

render(<App />, document.getElementById('root'));
registerServiceWorker();

// render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={MainContainer} />
//       </Route>
//     </Router>
//   </Provider>,
//   mount
// );
