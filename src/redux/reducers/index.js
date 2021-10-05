import { numberChange, counter } from "./upDown";
import { AuthProvider } from "./auth_provider";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //LOCAL STORAGE

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["AuthProvider"],
};

const RootReducer = combineReducers({
  numberChange,
  AuthProvider,
  counter,
});

export default persistReducer(persistConfig, RootReducer);

// import { numberChange } from "./upDown";
// import { AuthProvider } from "./auth_provider";
// import { combineReducers } from "redux";

// const RootReducer = combineReducers({
//   numberChange,
//   AuthProvider,
// });

// export default RootReducer;

//Reducers are functions that takes the current state and an actions as an argument and return a new state result.
