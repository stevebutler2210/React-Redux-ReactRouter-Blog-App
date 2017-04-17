import { FETCH_POSTS, FETCH_SINGLE } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data, post: null };

    case FETCH_SINGLE:
      return { ...state, post: action.payload.data };

    default:
      return state;
  }
}