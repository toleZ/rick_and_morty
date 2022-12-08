import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const myFavoritesFiltered = state.myFavorites?.filter(
        (elm) => elm.id !== payload
      );
      return {
        ...state,
        myFavorites: myFavoritesFiltered,
      };
    case FILTER:
      const filteredAllCharacters = [...state.allCharacters]?.filter(
        (elm) => elm.gender === payload
      );
      return { ...state, myFavorites: filteredAllCharacters };
    case ORDER:
      const myFavoritesSorted = [...state.allCharacters]?.sort((a, b) =>
        payload === "Ascendente" ? a.id > b.id : a.id < b.id
      );
      return { ...state, myFavorites: myFavoritesSorted };
    default:
      return { ...state };
  }
};
