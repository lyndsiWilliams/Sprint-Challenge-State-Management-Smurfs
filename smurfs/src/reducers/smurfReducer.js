import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURFS_START,
  POST_SMURFS_SUCCESS,
  POST_SMURFS_FAILURE,
} from '../actions/smurfActions';

const initialState = {
  smurf: [],
  error: "",
  isFetching: false
};

function smurfReducer(state=initialState, action) {
  console.log(state);
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurf: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    case POST_SMURFS_START:
      return {
        ...state,
        isFetching: true
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        smurf: [...state.smurf, action.payload],
        isFetching: false,
      }
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state;
  };
};

export default smurfReducer;