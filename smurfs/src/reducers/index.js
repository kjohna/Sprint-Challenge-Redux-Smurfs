/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS, 
  ADD_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case GET_SMURFS_SUCCESS:
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
      case UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        error: null
      }
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload
      }
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;