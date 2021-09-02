import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Cart from './page/cart';
import CreateBook from './page/create-book';
import Contributon from './page/contribution';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={['/', '/cart']} component={Cart} />
          <Route exact path="/create-book" component={CreateBook} />
          <Route path="/contribution" component={Contributon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
