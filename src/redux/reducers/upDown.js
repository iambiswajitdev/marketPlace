const initialState = 0;

// const ActionType =
//   | { type: "STORE_PRODUCT_DETAIL", payload: any }
//   | { type: "TOGGLE_PRODUCT_DETAIL", payload: any };

export const numberChange = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const counterToggle = true;

export const counter = (state = counterToggle, action) => {
  switch (action.type) {
    case "COUNTER":
      return false;
    case "COUNTER_RESET":
      return true;
    default:
      return state;
  }
};
