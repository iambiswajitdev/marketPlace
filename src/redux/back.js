// //ACTION
// export const INC = (num) => {
//   return {
//     type: "INC",
//     payload: num
//   };
// };

// //REDUCER
// // inc.js
// const INITIAL_STATE = {
//   total: 0
// }

// export default Increment = (state = INITIAL_STATE, action) => {
//   switch(action.type){
//     case "INC":
//       return state.total + 1;
//     default:
//       return state
//   }
// }

// //COMBINED REDUCER
// import { combineReducers } from "redux";
// import increment from "./inc.js";

// const RootReducer = combineReducers({
//   increment,
// })

// export default RootReducer;

// //STORE
// // There can be only one store in a redux application. Store brings together all the states, action and reducers
// import {createStore} from "redux";

// import RootReducer from "./index.js";

// const store = createStore({
//   RootReducer
// })

// export default store;

// //In the index.js file, we will bind the <APP/> with <Provider></Provider>

// import {Provider} from "react-redux";
// import store from "./redux/store.js"

// <Provider store={store}>
//   <App/>
// </Provider>

//import store from "./redux/store.js";
//import {useDispatch, useSelector} from "react-redux";
const functionName = () => {
  const store = store.getStore(); //will fetch all the states in the store
  const state = useSelector((state) => state.stateName); // to fetch single state
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({
      type: "INCREMENT",
      payload: 12,
    });
  };
  return <div></div>;
};
