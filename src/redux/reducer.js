import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: [state.myFavorites.filter((elm) => elm.id !== payload)],
      };
    default:
      return { ...state };
  }
};
