import { FETCH_SURVEYS, FETCH_SURVEY } from "../actions/types";

export default function(state = [], action) {
  //   console.log(action);

  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;

    case FETCH_SURVEY:
      return action.payload;

    default:
      return state;
  }
}
