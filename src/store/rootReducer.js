import {createNavigationReducer} from "react-navigation-redux-helpers";
import {combineReducers} from "redux";
import AppNavigator from "../navigation/registerScreens";

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer
