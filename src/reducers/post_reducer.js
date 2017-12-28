import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = {
  total: [],
  current: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        total: action.payload.data
      };
      case FETCH_POST:
        return{
            ...state,
            current: action.payload.data
      };
    default:
      return state;
  }
}
