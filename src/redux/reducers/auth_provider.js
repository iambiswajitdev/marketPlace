const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
  token: null,
  category: null,
};

export const AuthProvider = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        tokem: null,
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload.category,
      };
    default:
      return state;
  }
};
