// React
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Axios
import axios from 'axios';
// Actions
import { getSmurfs, editSmurf } from '../actions/smurfActions';


const SmurfEdit = props => {
  const [editing, setEditing] = useState({
    name: '',
    age: '',
    height: '',
    id: ''
  });
  console.log('SMURFEDIT - EDITING', editing);
  console.log('SMURFEDIT - PROPS', props);

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setEditing(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    const id = editing.id;
    props.editSmurf(id, editing);
    history.push("/");
  };

  const handleChanges = e => {
    console.log("handleChanges");
    setEditing({...editing, [e.target.name]: e.target.value});
  };

  return (
    <div className="smurf-edit">
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="name"
         placeholder="name"
         onChange={handleChanges}
         value={editing.name}
        />
        <input
         type="text"
         name="age"
         placeholder="age"
         onChange={handleChanges}
         value={editing.age}
        />
        <input
         type="text"
         name="height"
         placeholder="height"
         onChange={handleChanges}
         value={editing.height}
        />
        <button type="submit">Submit Smurf Changes</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  smurf: state.smurf,
  error: state.error
})

export default connect(
  mapStateToProps,
  { getSmurfs, editSmurf }
)(SmurfEdit);