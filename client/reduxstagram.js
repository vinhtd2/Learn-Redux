// let's go!
import React from 'react';
import ReactDOM from 'react-dom';

// import Css
import css from './styles/style.styl';

// Import Components
/*import Main from './components/Main';*/
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import store, {history} from './store';

/*import Raven from 'raven-js';
import {sentry_url, logException} from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdfas9d08f',
    userLevel: 'editor'
  }
}).install();

Raven.captureMessage('Something bad happened');
Raven.showReportDialog();
*/


const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
