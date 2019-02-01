/*
  Be sure to import in all of the action types from `../actions`
*/
import { 
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE 
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
  smurfs: [
    {
      name: 'TESTSMURF',
      age: 200,
      height: '5cm'
    }
  ],
  fetchingSmurfs: false,
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
    default:
      return state;
  }
}

export default rootReducer;