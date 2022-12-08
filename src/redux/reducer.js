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
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.allCharacters, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.allCharacters?.filter((elm) => elm.id !== payload);
      return {
        ...state,
        allCharacters: filtered,
        myFavorites: filtered,
      };
    case FILTER:
      const filteredAllCharacters = [...state.allCharacters]?.filter(
        (elm) => elm.gender === payload
      );
      return { ...state, myFavorites: filteredAllCharacters };
    case ORDER:
      const myFavoritesSorted = [...state.allCharacters]?.sort((a, b) => {
        if (payload === "Ascendente") {
          if (a.id < b.id) return -1;
          else if (a.id > b.id) return 1;
          else return 0;
        } else {
          if (a.id > b.id) return -1;
          else if (a.id < b.id) return 1;
          else return 0;
        }
      });
      return { ...state, myFavorites: myFavoritesSorted };
    default:
      return { ...state };
  }
};
