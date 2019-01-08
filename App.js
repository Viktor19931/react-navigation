import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {AppWithNavigationState, store} from "./src/store/configureStore";

export default class App extends Component {
  log = (name) => {
    alert(name);
  }
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState
          screenProps={{
            log: this.log
          }}
        />
      </Provider>
    );
  }
}
