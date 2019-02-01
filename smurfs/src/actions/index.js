import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';

const API = axios.create({
  baseURL: `http://localhost:3333/smurfs/`
})

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  API
  .get("")
  .then( res => {
    console.log(res);
    dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
  })
  .catch( err => {
    console.log(err);
    dispatch({ type: GET_SMURFS_FAILURE, payload: err.message });
  })
}

export const addSmurf = (smurfData) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  API
  .post("", smurfData)
  .then( res => {
    console.log(res);
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
  })
  .catch( err => {
    console.log(err);
    dispatch({ type: ADD_SMURF_FAILURE, payload: err.message });
  })
}

export const updateSmurfStart = () => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
}

export const updateSmurf = (smurfData) => dispatch => {
  API
  .put(`/${smurfData.id}`, smurfData)
  .then( res => {
    console.log(res);
    dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data });
  })
  .catch( err => {
    console.log(err);
    dispatch({ type: UPDATE_SMURF_FAILURE, payload: err.data });
  })
}