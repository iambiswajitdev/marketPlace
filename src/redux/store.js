import { createStore } from "redux";
import { persistStore } from "redux-persist";
import RootReducer from "./reducers/index";

export const store = createStore(
  RootReducer, //WE ARE SENDING RootReducer AS PROPS IN CREATE STORE
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //THIS IS FOR GOOGLE CHROME REACT DEV TOOLS, WE SHOULD DELETE THIS LINE WHILE MOVING TO PRODUCATION
);

export const persistor = persistStore(store);

const exportObj = { store, persistor };
export default exportObj;
