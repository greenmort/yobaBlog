import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import PostIndex from './containers/post_index';
import PostCreate from './containers/post_create';
import PostShow from './containers/post_show';
import Error from './components/error404';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);

class Application extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={PostIndex} />
              <Route path="/new" component={PostCreate} />
              <Route path="/posts/:id" component={PostShow} />
              <Route component={Error} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<Application />, document.getElementById('root'));
