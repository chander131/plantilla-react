import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/index';
import router from '@config/routes';
import { CacheProvider } from '@contexts/CacheContext';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Router>
        <CacheProvider>
          <Switch>
            {router.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component} />
            ))}
          </Switch>
        </CacheProvider>
      </Router>
    </ReduxProvider>
  );
}

export default App;
