// Axios
import axios from 'axios';
// Fetch
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
// Post
export const POST_SMURFS_START = "POST_SMURF_START";
export const POST_SMURFS_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURF_FAILURE";
// Delete
export const DELETE_SMURF = "DELETE_SMURF";
// Edit
export const EDIT_SMURF = "EDIT_SMURF";


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios.get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("Success!", res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: `${err.response.status} ${err.response.data}`
      });
    });
};

export const addSmurf = (newSmurf) => dispatch => {
  console.log('ADDSMURF RUNNING', newSmurf);
  dispatch({ type: POST_SMURFS_START});
  axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log("POST REQUEST", res);
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: POST_SMURFS_FAILURE, payload: err})
    })
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF, payload: id });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const editSmurf = (id, editedSmurf) => dispatch => {
  console.log('EDITSMURF ACTION - ', editedSmurf);
  dispatch({ type: EDIT_SMURF, payload: {id, editedSmurf} });
  axios.put(`http://localhost:3333/smurfs/${id}`, editedSmurf)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};