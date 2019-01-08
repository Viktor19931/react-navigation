import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from "react-navigation-redux-helpers";
import {applyMiddleware, createStore} from "redux";
import {connect} from "react-redux";
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import AppNavigator from "../navigation/registerScreens";

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(App);

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware, thunk),
);
